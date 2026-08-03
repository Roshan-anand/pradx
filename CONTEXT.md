# CONTEXT

## Glossary

- **Lead** — A person from a B2B prospect company who fills out the inquiry form with their name, email, and company details. They are not yet a customer.
- **Pradx** — The company that owns this landing page and receives Lead inquiry notifications.
- **Lead Inquiry Form** — Collects: name, email, company (optional), industry, service, budget (optional), brief. `industry`/`service`/`budget` are dropdowns with fixed option lists defined in `src/components/contact-form.tsx`.

## Inquiry flow

When a Lead submits the form, `POST /api/contact` runs the following steps:

1. **Validate** — the payload is checked against `leadInquirySchema` (zod, in `src/lib/schema.ts`). Empty optional fields are normalised to `undefined`.
2. **Write to Google Sheets** — primary store (`src/lib/google-sheets.ts`). Retries 2x on failure; if it still fails, falls back to inserting into the `lead_inquiries` Postgres table.
3. **Emails** — welcome email to the Lead and notification email to Pradx are sent in parallel via Resend. Both retry 2x with silent failure (errors are logged, never thrown).

The client fires-and-forgets and shows an inline "thank you" / error message after submission.
