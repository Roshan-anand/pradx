# ADR 0001: In-app Server Action orchestration for Lead inquiry

## Status

Accepted

## Context

Lead inquiry form submission triggers 4 downstream actions:
1. Write to Google Sheets
2. Send welcome email to the Lead
3. Send notification email to Pradx
4. Send WhatsApp notification to Pradx

These must all happen when the Lead clicks "Send."

## Decision

We will orchestrate all 4 actions synchronously from a single Next.js Server Action. No external automation (n8n, Zapier) or background queue (Inngest, QStash) at this stage.

## Alternatives considered

- **n8n webhook orchestration**: Simpler to wire up, built-in retry, but adds an external dependency and operational surface area.
- **Event-driven with background workers**: Resilient and fast form submit, but introduces queue infrastructure and worker management — overkill for current scale.

## Consequences

- **Positive**: Zero extra infrastructure. All logic in one repo. Easy to reason about.
- **Negative**: 4 sequential API calls make form submit slower. If any one call fails, the entire request fails — no partial success or retry isolation.
- **Mitigation**: When Lead volume grows, introduce Redis-backed job queue and split into workers. The Server Action boundary makes this refactor clean — just swap the implementation behind the action.
