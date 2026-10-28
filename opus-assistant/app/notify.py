import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from typing import Dict, Any
from app.config import settings

def send_notification(subject: str, message_body: str, data: Dict[str, Any]):
    """
    Sends an email alert to the OPUS sales team if SMTP is configured.
    Falls back to logging into logs/notifications.log if SMTP is missing or fails.
    """
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    
    # 1. Always append to local notification audit log
    log_file = settings.LOGS_DIR / "notifications.log"
    with open(log_file, "a", encoding="utf-8") as f:
        f.write(f"\n{'='*60}\n")
        f.write(f"TIMESTAMP: {now}\n")
        f.write(f"SUBJECT:   {subject}\n")
        f.write(f"BODY:\n{message_body}\n")
        f.write(f"RAW DATA:  {data}\n")
        f.write(f"{'='*60}\n")

    # 2. Try SMTP if configured
    if settings.SMTP_HOST and settings.SMTP_USER and settings.SMTP_PASSWORD:
        try:
            msg = MIMEMultipart()
            msg["From"] = settings.SMTP_FROM
            msg["To"] = settings.SALES_NOTIFICATION_EMAIL
            msg["Subject"] = f"[OPUS Assistant] {subject}"

            msg.attach(MIMEText(message_body, "plain", "utf-8"))

            server = smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=10)
            server.starttls()
            server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
            server.send_message(msg)
            server.quit()
        except Exception as e:
            with open(log_file, "a", encoding="utf-8") as f:
                f.write(f"SMTP SEND ERROR: {str(e)}\n")

def notify_lead_captured(lead: Dict[str, Any]):
    subject = f"New Qualified Lead: {lead.get('name')} ({lead.get('company')})"
    body = f"""Hello OPUS Sales Team,

A new qualified enterprise lead was just captured by OPUS Assistant!

Details:
- Name:        {lead.get('name')}
- Work Email:  {lead.get('email')}
- Company:     {lead.get('company')}
- Requirement: {lead.get('requirement')}
- Industry:    {lead.get('industry') or 'Not specified'}
- Country:     {lead.get('country') or 'Not specified'}
- Phone:       {lead.get('phone') or 'Not provided'}
- Timeline:    {lead.get('timeline') or 'Not specified'}
- Lead ID:     {lead.get('lead_id')}
- Session ID:  {lead.get('session_id')}

Please reach out to the lead promptly.
"""
    send_notification(subject, body, lead)

def notify_demo_requested(demo: Dict[str, Any]):
    subject = f"Demo Request Scheduled for Lead #{demo.get('lead_id')}"
    body = f"""Hello OPUS Sales Team,

A product demonstration was requested via OPUS Assistant.

Details:
- Lead ID:        {demo.get('lead_id')}
- Product Name:   {demo.get('product_name')}
- Preferred Time: {demo.get('preferred_time')}

Please assign a solution architect to host the demonstration.
"""
    send_notification(subject, body, demo)

def notify_escalation(escalation: Dict[str, Any]):
    subject = f"URGENT: Human Escalation Triggered ({escalation.get('reason')[:30]}...)"
    body = f"""Hello OPUS Support & Sales Leadership,

A conversation requires human intervention.

Details:
- Reason:  {escalation.get('reason')}
- Contact: {escalation.get('visitor_contact') or 'None provided in session'}
- Session: {escalation.get('session_id')}

Please review the conversation and follow up immediately.
"""
    send_notification(subject, body, escalation)

