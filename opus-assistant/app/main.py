import time
import logging
from collections import defaultdict
from typing import Optional
from fastapi import FastAPI, HTTPException, Header, Request, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field

from app.config import settings
from app.database import init_db, list_all_leads, list_all_escalations
from app.retrieval import retriever
from app.agent import agent

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("opus_assistant.main")

# Initialize SQLite database on startup
init_db()

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Sales and lead-qualification AI Assistant for OPUS Infiniti"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple sliding window in-memory rate limiter per IP
ip_request_timestamps = defaultdict(list)

def check_rate_limit(request: Request):
    client_ip = request.client.host if request.client else "unknown"
    now = time.time()
    cutoff = now - 60.0

    # Filter timestamps in the last minute
    timestamps = [t for t in ip_request_timestamps[client_ip] if t > cutoff]
    if len(timestamps) >= settings.RATE_LIMIT_PER_MINUTE:
        logger.warning(f"Rate limit exceeded for IP: {client_ip}")
        raise HTTPException(status_code=429, detail="Too many requests. Please wait a moment before trying again.")

    timestamps.append(now)
    ip_request_timestamps[client_ip] = timestamps

# Admin Auth Dependency
def verify_admin_token(x_admin_token: Optional[str] = Header(None)):
    if not x_admin_token or x_admin_token != settings.ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized: Invalid admin token")
    return True

# Request and Response Models
class ChatRequest(BaseModel):
    session_id: Optional[str] = Field(None, description="Client session identifier")
    message: str = Field(..., min_length=1, max_length=2000, description="Visitor query or statement")

class ChatResponse(BaseModel):
    reply: str
    session_id: str

@app.get("/health", tags=["System"])
def health_check():
    """Health check endpoint reporting agent readiness and loaded knowledge chunks."""
    doc_count = len(getattr(retriever, "documents", []))
    return {
        "status": "ok",
        "app": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "model": settings.MODEL,
        "knowledge_chunks": doc_count,
        "anthropic_configured": bool(settings.ANTHROPIC_API_KEY)
    }

@app.post("/chat", response_model=ChatResponse, tags=["Chat"])
def chat_endpoint(payload: ChatRequest, request: Request, _=Depends(check_rate_limit)):
    """Primary chat endpoint for visitors on opusinfiniti.com."""
    try:
        result = agent.run(session_id=payload.session_id, user_message=payload.message)
        return ChatResponse(reply=result["reply"], session_id=result["session_id"])
    except Exception as e:
        logger.error(f"Error in /chat: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal assistant error. Please try again.")

@app.post("/chat/stream", tags=["Chat"])
async def chat_stream_endpoint(payload: ChatRequest, request: Request, _=Depends(check_rate_limit)):
    """Streaming chat endpoint using Server-Sent Events (SSE)."""
    return StreamingResponse(
        agent.run_stream(session_id=payload.session_id, user_message=payload.message),
        media_type="text/event-stream"
    )

@app.post("/admin/ingest", tags=["Admin"])
def admin_ingest(authenticated: bool = Depends(verify_admin_token)):
    """Re-indexes the knowledge base from data/kb.json."""
    retriever.reload()
    doc_count = len(getattr(retriever, "documents", []))
    logger.info(f"Admin ingested knowledge base: {doc_count} chunks indexed.")
    return {
        "status": "success",
        "message": f"Knowledge base reloaded. Indexed {doc_count} documents.",
        "documents_count": doc_count
    }

@app.get("/admin/leads", tags=["Admin"])
def admin_get_leads(authenticated: bool = Depends(verify_admin_token)):
    """Lists all captured enterprise leads."""
    leads = list_all_leads()
    return {"status": "success", "count": len(leads), "leads": leads}

@app.get("/admin/escalations", tags=["Admin"])
def admin_get_escalations(authenticated: bool = Depends(verify_admin_token)):
    """Lists all human escalations."""
    escalations = list_all_escalations()
    return {"status": "success", "count": len(escalations), "escalations": escalations}

