# Domain
- The person filling out the inquiry form is a "Lead" (B2B context), not a "user" or "client". Confidence: 0.70

# Architecture
- Use Next.js Server Actions for form submission orchestration (call external services directly in-app), not n8n/webhooks or external queues. Confidence: 0.50
- Prefer simple, hardcoded implementations for small static datasets (e.g., package names as literal strings in a select tag) over database tables or CMS-driven configuration — YAGNI. Confidence: 0.55
- Prioritize business-notification emails (e.g., notifying Pradx of a new Lead) over end-user-facing emails (e.g., welcome email to Lead) — the notification is the critical path, welcome is secondary. Confidence: 0.80
- When an integration carries high setup friction (e.g., WhatsApp Business API requires business verification, template approval), prefer substituting a simpler alternative that achieves the same user goal (e.g., static direct-chat link) rather than committing to the integration. Confidence: 0.65

# Tooling
- Use Resend for programmatic email sending in Next.js apps. Confidence: 0.75

# Workflow
- Explore the codebase before engaging in design discussions — read package.json, browse the source tree, check for existing docs (CONTEXT.md, ADRs), and skim key source files. Confidence: 0.80
- Run design interviews as sequential single-question rounds: ask one focused question, wait for the answer, then proceed to the next. Confidence: 0.75

# Documentation
- Create a CONTEXT.md file with a Glossary section to disambiguate domain terms early, before any implementation. Confidence: 0.70
- Capture architectural decisions as lightweight ADRs in docs/adr/ with sections: Status, Context, Decision, Alternatives considered, Consequences. Confidence: 0.70

# Taste (Continuously Learned by [CommandCode][cmd])

[cmd]: https://commandcode.ai/

