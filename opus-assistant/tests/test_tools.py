import pytest
import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.tools import (
    execute_search_knowledge,
    execute_recommend_product,
    execute_capture_lead,
    execute_request_demo,
    execute_escalate_to_human,
    dispatch_tool
)
from app.database import init_db

init_db()

def test_search_knowledge():
    res = execute_search_knowledge(query="snowflake oracle etl", top_k=2)
    assert "passages" in res
    assert len(res["passages"]) <= 2
    assert any("ETL" in p["title"] or "Data" in p["title"] or "Migration" in p["title"] for p in res["passages"])

def test_recommend_product_school():
    res = execute_recommend_product(industry="Education", problem="international school attendance and bus tracking")
    assert res["status"] == "matched"
    assert "emsPLUS" in res["product_name"]

def test_recommend_product_etl():
    res = execute_recommend_product(industry="Enterprise IT", problem="move data from Oracle to Snowflake database")
    assert res["status"] == "matched"
    assert "OPUS Data Migration" in res["product_name"]

def test_capture_lead_valid():
    res = execute_capture_lead(
        name="Ananth P",
        email="ananth@client.com",
        company="Global Corp",
        requirement="Looking for Manufacturing ERP and IoT"
    )
    assert res["status"] == "success"
    assert "lead_id" in res

def test_capture_lead_invalid_email():
    res = execute_capture_lead(
        name="Test User",
        email="invalid-not-an-email",
        company="Acme Corp",
        requirement="Need CRM"
    )
    assert res["status"] == "error"
    assert "Invalid email format" in res["error"]

def test_capture_lead_missing_required():
    res = execute_capture_lead(
        name="",
        email="test@test.com",
        company="Corp",
        requirement="Need ERP"
    )
    assert res["status"] == "error"
    assert "Missing required field" in res["error"]

def test_request_demo():
    lead_res = execute_capture_lead(
        name="Priya",
        email="priya@hospital.com",
        company="Metro Hospital",
        requirement="Health ERP"
    )
    lead_id = lead_res["lead_id"]
    demo_res = execute_request_demo(
        lead_id=lead_id,
        preferred_time="Tomorrow 3 PM IST",
        product_name="OPUS Health ERP"
    )
    assert demo_res["status"] == "success"
    assert "demo_id" in demo_res

def test_escalate_to_human():
    res = execute_escalate_to_human(
        reason="Visitor wants human quote on customized logistics contract",
        visitor_contact="director@cargo.com"
    )
    assert res["status"] == "escalated"
    assert "reachus@opusinfiniti.com" in res["contact_email"]

