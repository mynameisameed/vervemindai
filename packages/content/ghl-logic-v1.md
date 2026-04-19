# VerveMind AI: GHL Workflow Blueprint v1.0

## Overview
This blueprint defines the logic for the "Instant Follow-up" engine. It bridges the AI Voice Agent (Vapi) with the CRM (GoHighLevel) to ensure 0-second lead response time.

## Workflow 1: AI Call Completion (The Hand-off)
**Trigger**: Vapi Webhook (Status: `call-ended`)
**Filters**: 
- `call_duration` > 30 seconds
- `extracted_data.intent` == "booking_requested"

**Actions**:
1. **Add/Update Contact**: Use extracted Name and Phone.
2. **Tag Contact**: `AI-Receptionist-Lead`, `Needs-Booking`.
3. **SMS Notification (to Lead)**: 
   - "Hi {{contact.first_name}}, thanks for speaking with Mia! Here is the link to book your appointment as discussed: [LINK]. See you soon!"
4. **Internal Notification (to Team)**:
   - "New Lead Captured by AI: {{contact.name}}. View call transcript here: [TRANSCRIPT_URL]"

## Workflow 2: Missed Call Recovery (The Safety Net)
**Trigger**: Twilio / Vapi (Status: `no-answer` or `busy`)
**Actions**:
1. **SMS Notification (to Lead)**:
   - "Sorry we missed your call! We're currently helping another client. Would you like to schedule a quick callback or book online here? [LINK]"
2. **Wait**: 5 minutes.
3. **Condition**: If no link click, notify team to manual dial.

## Data Schema (Payload from AI)
```json
{
  "lead_name": "string",
  "phone": "e164",
  "intent": "appointment | inquiry | support",
  "summary": "string",
  "transcript_link": "url"
}
```
