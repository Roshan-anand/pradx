# Workflow
- Explore the codebase before engaging in design discussions — read package.json, browse the source tree, check for existing docs (CONTEXT.md, ADRs), and skim key source files. Confidence: 0.80
- Run design interviews as sequential single-question rounds: ask one focused question, wait for the answer, then proceed to the next. Confidence: 0.75
- When the user says "finalise it" or explicitly signals a design branch is settled, lock in the decision and move forward — stop asking further clarifying questions on that topic. Confidence: 0.70
- Prefers implementation delegated to dev subagents, assigning one subagent per issue/task, and sequencing dependent tasks only after their blockers finish. Confidence: 0.85
- Wants tests written by a separate dev subagent as simple unit tests for each operation. Confidence: 0.85
- Before implementing a batch of planned issues, reads project context (CONTEXT.md) and existing ADRs (docs/adr). Confidence: 0.80
