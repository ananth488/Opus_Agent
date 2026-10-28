# OPUS Assistant

Production-style AI Sales and Lead-Qualification Agent for **OPUS Infiniti** ([opusinfiniti.com](https://opusinfiniti.com/)).

Built according to the specification prepared for **Ananth P.**:
- **Runtime System Prompt**: Strict enterprise guardrails, product matching rules, and multilingual Tamil/English support.
- **LLM Engine**: Anthropic Claude API (`claude-3-5-sonnet-20241022`) with multi-turn tool use loop (up to 6 iterations per turn).
- **Knowledge Retrieval**: BM25 Okapi retriever over verified OPUS Infiniti website content chunks (`data/kb.json`) behind an extensible `BaseRetriever` interface.
- **Tools**:
  1. `search_knowledge`: Knowledge base passage retrieval with scores and source URLs.
  2. `recommend_product`: Intelligent mapping from industry & problem to OPUS software products.
  3. `capture_lead`: Input validation (regex email check), sensitive data masking, SQLite storage, and sales team notification.
  4. `request_demo`: Captures preferred demo time and product for captured leads.
  5. `escalate_to_human`: Human handoff with official contact details (`reachus@opusinfiniti.com`, `+91 97909 65960`).
- **Database**: SQLite (`opus_assistant.db`) storing sessions, messages, leads, demo requests, and escalations.
- **Frontend**: Single-file embeddable chat widget (`frontend/widget.html`) with brand styling (`#5b63ff`), quick reply chips, and keyboard accessibility.

---

## 📁 Directory Structure

```text
opus-assistant/
├── app/
│   ├── __init__.py
│   ├── agent.py          # Claude multi-turn agent loop with tool execution
│   ├── config.py         # Configuration settings & environment loader
│   ├── database.py       # SQLite database, tables, message history, data masking
│   ├── main.py           # FastAPI REST & SSE Streaming API
│   ├── notify.py         # SMTP email dispatcher with log fallback
│   ├── retrieval.py      # BaseRetriever interface & BM25Okapi implementation
│   └── tools.py          # Tool schemas, executors, and validation
├── data/
│   └── kb.json           # Seed & scraped knowledge chunks
├── frontend/
│   └── widget.html       # Embeddable single-file chat widget
├── prompts/
│   └── system_prompt.md  # Part A runtime system prompt
├── scripts/
│   ├── demo_conversations.py # Runs Part D checklist scenarios
│   └── scrape_site.py        # Scrapes & chunks opusinfiniti.com
├── tests/
│   ├── test_agent.py     # Unit tests for agent loop & mocked Claude
│   ├── test_retrieval.py # Unit tests for BM25 retrieval
│   └── test_tools.py     # Unit tests for tool validation and execution
├── .env.example          # Environment variables template
├── requirements.txt      # Python dependencies
└── README.md             # Documentation
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd opus-assistant
pip install -r requirements.txt
```

### 2. Configure Environment
Copy `.env.example` to `.env` and set your Anthropic API Key:
```bash
cp .env.example .env
```
Edit `.env`:
```ini
ANTHROPIC_API_KEY=sk-ant-api03-...
MODEL=claude-3-5-sonnet-20241022
ADMIN_TOKEN=opus-secret-admin-token-2026
PORT=8000
```
*(Note: If `ANTHROPIC_API_KEY` is omitted, the assistant operates in smart offline fallback mode for local testing).*

### 3. Run the FastAPI Server
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```
API Documentation will be live at:
- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Health status and knowledge chunk count | Public |
| `POST` | `/chat` | Standard message exchange (`{session_id, message}`) | Public (Rate-limited) |
| `POST` | `/chat/stream` | Server-Sent Events (SSE) token stream | Public (Rate-limited) |
| `POST` | `/admin/ingest` | Reloads / re-indexes `data/kb.json` | `X-Admin-Token` |
| `GET` | `/admin/leads` | Lists all captured leads | `X-Admin-Token` |
| `GET` | `/admin/escalations`| Lists all human escalations | `X-Admin-Token` |

---

## 🧪 Testing & Verification

Run the complete test suite:
```bash
python -m pytest tests/ -v
```

Run the Part D checklist demonstration:
```bash
python scripts/demo_conversations.py
```

---

## 🌐 Embedding the Chat Widget

Open `frontend/widget.html` in your browser to test the interactive widget, or embed it on any webpage with:
```html
<iframe src="http://localhost:8000/widget" style="position:fixed;bottom:20px;right:20px;width:400px;height:650px;border:none;z-index:999999;"></iframe>
```

