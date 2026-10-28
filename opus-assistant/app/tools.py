import re
import logging
from typing import Dict, Any, List, Optional
from app.retrieval import retriever
from app.database import (
    insert_lead,
    insert_demo_request,
    insert_escalation,
    mask_sensitive_data
)
from app.notify import (
    notify_lead_captured,
    notify_demo_requested,
    notify_escalation
)

logger = logging.getLogger("opus_assistant.tools")

# Strict email validation regex
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

# Product recommendation rules dictionary based on verified OPUS portfolio
RECOMMENDATION_RULES = [
    {
        "keywords": ["data", "etl", "database", "migration", "oracle", "snowflake", "sql", "sync", "pipeline"],
        "product_name": "OPUS Data Migration (ETL tool)",
        "reason": "Specialized in zero-downtime, multi-database ETL transitions with pre-built connectors for Oracle, Snowflake, and PostgreSQL.",
        "learn_more_url": "https://opusinfiniti.com/products/opusdata-etl"
    },
    {
        "keywords": ["fixed deposit", "bond", "equity", "equities", "portfolio", "treasury", "dividend", "yield", "shares", "investment"],
        "product_name": "OPUS Portfolio Management (Reliance PMS)",
        "reason": "Enterprise investment management platform handling valuation, automated dividend accrual, and yield optimization across bonds, FDs, and equities.",
        "learn_more_url": "https://opusinfiniti.com/products/reliance-pms"
    },
    {
        "keywords": ["school", "bus", "attendance", "admissions", "student", "report card", "grading", "parent", "tuition", "curriculum"],
        "product_name": "emsPLUS-Premium",
        "reason": "Comprehensive international school ERP with GPS bus tracking, biometric attendance, admissions lifecycle, and parent portal.",
        "learn_more_url": "https://opusinfiniti.com/products/emsplus-premium"
    },
    {
        "keywords": ["factory", "manufacturing", "machine", "predictive maintenance", "downtime", "bom", "shop floor", "production"],
        "product_name": "OPUS Manufacturing ERP",
        "reason": "Features ML-driven predictive maintenance with 94% accuracy, reducing unplanned downtime from 40% to 12%.",
        "learn_more_url": "https://opusinfiniti.com/domain#extended-enterprise"
    },
    {
        "keywords": ["logistics", "shipping", "shipment", "route", "fleet", "truck", "delivery", "carrier", "freight", "warehouse"],
        "product_name": "OPUS Supply Chain & Logistics",
        "reason": "ML-powered route optimization cutting delivery times by 35% and fuel costs by 25% with real-time multi-carrier tracking.",
        "learn_more_url": "https://opusinfiniti.com/domain#extended-enterprise"
    },
    {
        "keywords": ["hospital", "clinic", "patient", "doctor", "medical", "surgery", "emr", "healthcare"],
        "product_name": "OPUS Health ERP",
        "reason": "Enterprise hospital intelligence platform with 94% patient-specialist AI matching, electronic health records, and multi-language patient translation.",
        "learn_more_url": "https://opusinfiniti.com/domain#enterprise"
    },
    {
        "keywords": ["university", "college", "higher education", "faculty", "degree", "curriculum"],
        "product_name": "OPUS Education ERP",
        "reason": "Higher education management platform supporting accreditation, outcome-based grading, and student lifecycle workflows.",
        "learn_more_url": "https://opusinfiniti.com/domain#education"
    },
    {
        "keywords": ["payroll", "salary", "epf", "socso", "pcb", "cpf", "hrms", "leave", "human resources", "hr"],
        "product_name": "OPUS HRMS Suite",
        "reason": "Country-specific statutory compliance payroll engine automated for Malaysia, Singapore, and African regulations.",
        "learn_more_url": "https://opusinfiniti.com/domain#hrms"
    },
    {
        "keywords": ["sales", "leads", "lead", "pipeline", "deals", "crm", "customer relationship"],
        "product_name": "OPUS CRM Platform",
        "reason": "AI-powered CRM delivering predictive lead scoring, automated deal pipeline, and omnichannel customer communication.",
        "learn_more_url": "https://opusinfiniti.com/domain#extended-enterprise"
    },
    {
        "keywords": ["ecommerce", "e-commerce", "online store", "marketplace", "shop", "checkout", "cart"],
        "product_name": "OPUS eCommerce Platform",
        "reason": "Multi-vendor marketplace platform featuring automated demand forecasting, real-time inventory syncing, and global payments.",
        "learn_more_url": "https://opusinfiniti.com/domain#extended-enterprise"
    }
]

# Anthropic Tool Schemas
TOOL_SCHEMAS = [
    {
        "name": "search_knowledge",
        "description": "Searches the OPUS Infiniti knowledge base for verified company facts, products, case studies, technology architecture, and global offices. Call this before answering any factual questions.",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "The search query to match against the OPUS Infiniti knowledge base."
                },
                "top_k": {
                    "type": "integer",
                    "description": "Number of passages to return (default 4).",
                    "default": 4
                }
            },
            "required": ["query"]
        }
    },
    {
        "name": "recommend_product",
        "description": "Maps the visitor's industry and problem description to the best-matching OPUS product or platform.",
        "input_schema": {
            "type": "object",
            "properties": {
                "industry": {
                    "type": "string",
                    "description": "The industry of the visitor (e.g., Education, Manufacturing, Healthcare, Logistics, Finance)."
                },
                "problem": {
                    "type": "string",
                    "description": "The business problem or objective they want to solve."
                }
            },
            "required": ["industry", "problem"]
        }
    },
    {
        "name": "capture_lead",
        "description": "Saves a qualified lead to the database and alerts the OPUS sales team. Only call after the visitor has explicitly provided and consented to share their contact details.",
        "input_schema": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "Full name of the contact person."
                },
                "email": {
                    "type": "string",
                    "description": "Valid corporate or work email address."
                },
                "company": {
                    "type": "string",
                    "description": "Organization or company name."
                },
                "requirement": {
                    "type": "string",
                    "description": "Summary of what they need and what problem they are solving."
                },
                "industry": {
                    "type": "string",
                    "description": "Industry domain of the company."
                },
                "country": {
                    "type": "string",
                    "description": "Country where the organization operates."
                },
                "phone": {
                    "type": "string",
                    "description": "Optional contact phone number."
                },
                "timeline": {
                    "type": "string",
                    "description": "Expected implementation timeline (e.g., immediate, 1-3 months, next quarter)."
                }
            },
            "required": ["name", "email", "company", "requirement"]
        }
    },
    {
        "name": "request_demo",
        "description": "Records a live product demo request for an already captured lead.",
        "input_schema": {
            "type": "object",
            "properties": {
                "lead_id": {
                    "type": "integer",
                    "description": "The lead ID returned by a prior capture_lead call."
                },
                "preferred_time": {
                    "type": "string",
                    "description": "Preferred date, time, or timezone for the demonstration."
                },
                "product_name": {
                    "type": "string",
                    "description": "Name of the OPUS product to be demonstrated."
                }
            },
            "required": ["lead_id", "preferred_time", "product_name"]
        }
    },
    {
        "name": "escalate_to_human",
        "description": "Escalates the conversation to the human sales/engineering team when the visitor requests a human, has an issue with an existing system, or asks something not in the knowledge base.",
        "input_schema": {
            "type": "object",
            "properties": {
                "reason": {
                    "type": "string",
                    "description": "Reason for escalating to human team."
                },
                "visitor_contact": {
                    "type": "string",
                    "description": "Visitor contact information (email or phone) if provided."
                }
            },
            "required": ["reason"]
        }
    }
]

# Tool Executors
def execute_search_knowledge(query: str, top_k: int = 4) -> Dict[str, Any]:
    query_clean = mask_sensitive_data(query.strip())
    logger.info(f"Executing search_knowledge for query: {query_clean} (top_k={top_k})")
    results = retriever.search(query=query_clean, top_k=top_k)
    return {
        "query": query_clean,
        "count": len(results),
        "passages": results
    }

def execute_recommend_product(industry: str, problem: str) -> Dict[str, Any]:
    text_to_match = f"{industry} {problem}".lower()
    logger.info(f"Executing recommend_product for industry='{industry}', problem='{problem}'")

    best_match = None
    max_score = 0

    for rule in RECOMMENDATION_RULES:
        score = sum(1 for kw in rule["keywords"] if kw in text_to_match)
        if score > max_score:
            max_score = score
            best_match = rule

    if best_match and max_score > 0:
        return {
            "status": "matched",
            "product_name": best_match["product_name"],
            "reason": best_match["reason"],
            "learn_more_url": best_match["learn_more_url"]
        }

    # Fallback to search_knowledge
    search_res = retriever.search(text_to_match, top_k=1)
    if search_res:
        top_doc = search_res[0]
        return {
            "status": "suggested_from_kb",
            "product_name": top_doc["title"],
            "reason": f"Based on knowledge match: {top_doc['text'][:140]}...",
            "learn_more_url": top_doc["source_url"]
        }

    return {
        "status": "custom_solution_needed",
        "product_name": "OPUS Custom Enterprise Solution",
        "reason": "OPUS Infiniti develops custom AI/ML, ERP, and IoT architectures tailored to complex enterprise requirements.",
        "learn_more_url": "https://opusinfiniti.com/contact"
    }

def execute_capture_lead(
    name: str,
    email: str,
    company: str,
    requirement: str,
    industry: Optional[str] = None,
    country: Optional[str] = None,
    phone: Optional[str] = None,
    timeline: Optional[str] = None,
    session_id: Optional[str] = None
) -> Dict[str, Any]:
    # 1. Validation of required fields
    if not name or not name.strip():
        return {"status": "error", "error": "Missing required field: name"}
    if not email or not email.strip():
        return {"status": "error", "error": "Missing required field: email"}
    if not company or not company.strip():
        return {"status": "error", "error": "Missing required field: company"}
    if not requirement or not requirement.strip():
        return {"status": "error", "error": "Missing required field: requirement"}

    # 2. Email format validation
    clean_email = email.strip().lower()
    if not EMAIL_REGEX.match(clean_email):
        return {
            "status": "error",
            "error": f"Invalid email format: '{clean_email}'. Please provide a valid work email (e.g. name@company.com)."
        }

    # 3. Store lead in database
    lead_data = {
        "session_id": session_id,
        "name": mask_sensitive_data(name.strip()),
        "email": clean_email,
        "company": mask_sensitive_data(company.strip()),
        "requirement": mask_sensitive_data(requirement.strip()),
        "industry": mask_sensitive_data(industry.strip()) if industry else None,
        "country": mask_sensitive_data(country.strip()) if country else None,
        "phone": mask_sensitive_data(phone.strip()) if phone else None,
        "timeline": mask_sensitive_data(timeline.strip()) if timeline else None,
    }

    try:
        lead_id = insert_lead(lead_data)
        lead_data["lead_id"] = lead_id
        
        # 4. Notify sales team (SMTP or local file log)
        notify_lead_captured(lead_data)
        logger.info(f"Successfully captured lead #{lead_id} for {clean_email}")

        return {
            "status": "success",
            "lead_id": lead_id,
            "message": "Lead successfully registered and notified to the OPUS sales team."
        }
    except Exception as e:
        logger.error(f"Error inserting lead: {e}")
        return {"status": "error", "error": "Internal database error while saving lead."}

def execute_request_demo(
    lead_id: int,
    preferred_time: str,
    product_name: str
) -> Dict[str, Any]:
    if not lead_id:
        return {"status": "error", "error": "lead_id is required"}
    if not preferred_time or not preferred_time.strip():
        return {"status": "error", "error": "preferred_time is required"}
    if not product_name or not product_name.strip():
        return {"status": "error", "error": "product_name is required"}

    demo_data = {
        "lead_id": lead_id,
        "preferred_time": mask_sensitive_data(preferred_time.strip()),
        "product_name": mask_sensitive_data(product_name.strip())
    }

    try:
        demo_id = insert_demo_request(demo_data)
        demo_data["demo_id"] = demo_id
        notify_demo_requested(demo_data)
        logger.info(f"Recorded demo request #{demo_id} for lead #{lead_id}")

        return {
            "status": "success",
            "demo_id": demo_id,
            "message": f"Demo request recorded for {product_name} at {preferred_time}. Our solution engineering team will confirm the calendar invite."
        }
    except Exception as e:
        logger.error(f"Error inserting demo request: {e}")
        return {"status": "error", "error": "Failed to record demo request."}

def execute_escalate_to_human(
    reason: str,
    visitor_contact: Optional[str] = None,
    session_id: Optional[str] = None
) -> Dict[str, Any]:
    if not reason or not reason.strip():
        return {"status": "error", "error": "reason is required for escalation"}

    esc_data = {
        "session_id": session_id,
        "reason": mask_sensitive_data(reason.strip()),
        "visitor_contact": mask_sensitive_data(visitor_contact.strip()) if visitor_contact else None
    }

    try:
        esc_id = insert_escalation(esc_data)
        notify_escalation(esc_data)
        logger.info(f"Escalation logged #{esc_id}: {reason}")

        return {
            "status": "escalated",
            "escalation_id": esc_id,
            "contact_email": "reachus@opusinfiniti.com",
            "contact_phone": "+91 97909 65960",
            "message": "I've flagged this conversation for our team. You can also reach our leadership directly at reachus@opusinfiniti.com or call +91 97909 65960."
        }
    except Exception as e:
        logger.error(f"Error logging escalation: {e}")
        return {
            "status": "escalated",
            "contact_email": "reachus@opusinfiniti.com",
            "contact_phone": "+91 97909 65960",
            "message": "Our team has been informed. Please email reachus@opusinfiniti.com or call +91 97909 65960."
        }

def dispatch_tool(tool_name: str, tool_args: Dict[str, Any], session_id: Optional[str] = None) -> Dict[str, Any]:
    """Central router to invoke appropriate tool implementation safely."""
    if tool_name == "search_knowledge":
        return execute_search_knowledge(
            query=tool_args.get("query", ""),
            top_k=tool_args.get("top_k", 4)
        )
    elif tool_name == "recommend_product":
        return execute_recommend_product(
            industry=tool_args.get("industry", ""),
            problem=tool_args.get("problem", "")
        )
    elif tool_name == "capture_lead":
        return execute_capture_lead(
            name=tool_args.get("name", ""),
            email=tool_args.get("email", ""),
            company=tool_args.get("company", ""),
            requirement=tool_args.get("requirement", ""),
            industry=tool_args.get("industry"),
            country=tool_args.get("country"),
            phone=tool_args.get("phone"),
            timeline=tool_args.get("timeline"),
            session_id=session_id
        )
    elif tool_name == "request_demo":
        return execute_request_demo(
            lead_id=tool_args.get("lead_id", 0),
            preferred_time=tool_args.get("preferred_time", ""),
            product_name=tool_args.get("product_name", "")
        )
    elif tool_name == "escalate_to_human":
        return execute_escalate_to_human(
            reason=tool_args.get("reason", "Visitor requested human follow-up"),
            visitor_contact=tool_args.get("visitor_contact"),
            session_id=session_id
        )
    else:
        return {"status": "error", "error": f"Unknown tool: {tool_name}"}

