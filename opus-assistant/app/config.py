import os
from pathlib import Path
from typing import List
from pydantic import BaseModel
from dotenv import load_dotenv

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Load .env
load_dotenv(BASE_DIR / ".env")

class Settings(BaseModel):
    # App
    APP_NAME: str = "OPUS Assistant"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", "8000"))

    # Anthropic
    ANTHROPIC_API_KEY: str = os.getenv("ANTHROPIC_API_KEY", "")
    MODEL: str = os.getenv("MODEL", "claude-3-5-sonnet-20241022")
    MAX_TOOL_ITERATIONS: int = int(os.getenv("MAX_TOOL_ITERATIONS", "6"))

    # Security & Admin
    ADMIN_TOKEN: str = os.getenv("ADMIN_TOKEN", "opus-secret-admin-token-2026")
    ALLOWED_ORIGINS: List[str] = [
        origin.strip()
        for origin in os.getenv(
            "ALLOWED_ORIGINS",
            "http://localhost:3000,http://127.0.0.1:3000,http://localhost:8000,https://opusinfiniti.com"
        ).split(",")
    ]
    RATE_LIMIT_PER_MINUTE: int = int(os.getenv("RATE_LIMIT_PER_MINUTE", "30"))

    # Paths
    DATABASE_PATH: Path = BASE_DIR / "opus_assistant.db"
    KB_FILE_PATH: Path = BASE_DIR / "data" / "kb.json"
    SYSTEM_PROMPT_PATH: Path = BASE_DIR / "prompts" / "system_prompt.md"
    LOGS_DIR: Path = BASE_DIR / "logs"

    # SMTP Notifications
    SMTP_HOST: str = os.getenv("SMTP_HOST", "")
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER: str = os.getenv("SMTP_USER", "")
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "")
    SMTP_FROM: str = os.getenv("SMTP_FROM", "assistant@opusinfiniti.com")
    SALES_NOTIFICATION_EMAIL: str = os.getenv("SALES_NOTIFICATION_EMAIL", "reachus@opusinfiniti.com")

settings = Settings()

# Ensure logs dir exists
settings.LOGS_DIR.mkdir(parents=True, exist_ok=True)

