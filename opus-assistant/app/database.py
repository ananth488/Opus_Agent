import sqlite3
import json
import re
import uuid
from datetime import datetime
from typing import List, Dict, Any, Optional
from app.config import settings

# Sensitive data sanitization regexes
CREDIT_CARD_REGEX = re.compile(r"\b(?:\d[ -]*?){13,16}\b")
SSN_AADHAAR_REGEX = re.compile(r"\b\d{3}-\d{2}-\d{4}\b|\b\d{4}\s\d{4}\s\d{4}\b")
PASSWORD_REGEX = re.compile(r"(?i)\b(?:password|passwd|pwd)\s*[:=]\s*\S+")

def mask_sensitive_data(text: str) -> str:
    """Masks credit card numbers, passwords, and government IDs before logging or saving."""
    if not isinstance(text, str):
        return text
    text = CREDIT_CARD_REGEX.sub("[CARD_MASKED]", text)
    text = SSN_AADHAAR_REGEX.sub("[ID_MASKED]", text)
    text = PASSWORD_REGEX.sub("password: [MASKED]", text)
    return text

def get_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(str(settings.DATABASE_PATH), check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    # Sessions table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
    );
    """)

    # Messages table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        tool_calls TEXT,
        created_at TEXT NOT NULL,
        FOREIGN KEY (session_id) REFERENCES sessions (id)
    );
    """)

    # Leads table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        requirement TEXT NOT NULL,
        industry TEXT,
        country TEXT,
        phone TEXT,
        timeline TEXT,
        status TEXT NOT NULL DEFAULT 'new',
        created_at TEXT NOT NULL
    );
    """)

    # Demo Requests table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS demo_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lead_id INTEGER,
        product_name TEXT,
        preferred_time TEXT,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TEXT NOT NULL,
        FOREIGN KEY (lead_id) REFERENCES leads (id)
    );
    """)

    # Escalations table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS escalations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id TEXT,
        reason TEXT NOT NULL,
        visitor_contact TEXT,
        status TEXT NOT NULL DEFAULT 'open',
        created_at TEXT NOT NULL
    );
    """)

    conn.commit()
    conn.close()

def ensure_session(session_id: Optional[str] = None) -> str:
    conn = get_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()

    if session_id:
        cursor.execute("SELECT id FROM sessions WHERE id = ?", (session_id,))
        row = cursor.fetchone()
        if row:
            cursor.execute("UPDATE sessions SET updated_at = ? WHERE id = ?", (now, session_id))
            conn.commit()
            conn.close()
            return session_id

    # Create new session
    new_id = session_id or str(uuid.uuid4())
    cursor.execute("INSERT OR REPLACE INTO sessions (id, created_at, updated_at) VALUES (?, ?, ?)", (new_id, now, now))
    conn.commit()
    conn.close()
    return new_id

def save_message(session_id: str, role: str, content: str, tool_calls: Optional[List[Dict[str, Any]]] = None):
    conn = get_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()
    masked_content = mask_sensitive_data(content)
    tool_calls_json = json.dumps(tool_calls) if tool_calls else None

    cursor.execute(
        "INSERT INTO messages (session_id, role, content, tool_calls, created_at) VALUES (?, ?, ?, ?, ?)",
        (session_id, role, masked_content, tool_calls_json, now)
    )
    conn.commit()
    conn.close()

def get_recent_messages(session_id: str, limit: int = 12) -> List[Dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT role, content, tool_calls FROM messages WHERE session_id = ? ORDER BY id DESC LIMIT ?",
        (session_id, limit)
    )
    rows = cursor.fetchall()
    conn.close()

    messages = []
    for r in reversed(rows):
        msg = {"role": r["role"], "content": r["content"]}
        if r["tool_calls"]:
            try:
                msg["tool_calls"] = json.loads(r["tool_calls"])
            except Exception:
                pass
        messages.append(msg)
    return messages

def insert_lead(lead_data: Dict[str, Any]) -> int:
    conn = get_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()

    cursor.execute("""
    INSERT INTO leads (session_id, name, email, company, requirement, industry, country, phone, timeline, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        lead_data.get("session_id"),
        lead_data["name"],
        lead_data["email"],
        lead_data["company"],
        lead_data["requirement"],
        lead_data.get("industry"),
        lead_data.get("country"),
        lead_data.get("phone"),
        lead_data.get("timeline"),
        now
    ))
    lead_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return lead_id

def insert_demo_request(demo_data: Dict[str, Any]) -> int:
    conn = get_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()

    cursor.execute("""
    INSERT INTO demo_requests (lead_id, product_name, preferred_time, created_at)
    VALUES (?, ?, ?, ?)
    """, (
        demo_data.get("lead_id"),
        demo_data.get("product_name"),
        demo_data.get("preferred_time"),
        now
    ))
    demo_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return demo_id

def insert_escalation(escalation_data: Dict[str, Any]) -> int:
    conn = get_connection()
    cursor = conn.cursor()
    now = datetime.utcnow().isoformat()

    cursor.execute("""
    INSERT INTO escalations (session_id, reason, visitor_contact, created_at)
    VALUES (?, ?, ?, ?)
    """, (
        escalation_data.get("session_id"),
        escalation_data["reason"],
        escalation_data.get("visitor_contact"),
        now
    ))
    esc_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return esc_id

def list_all_leads() -> List[Dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM leads ORDER BY id DESC")
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return rows

def list_all_escalations() -> List[Dict[str, Any]]:
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM escalations ORDER BY id DESC")
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return rows

# Auto-initialize database on import
init_db()
