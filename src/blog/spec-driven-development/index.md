---
title:  "Spec-Driven Development"
pubDate:   2026-03-30
description: ""
categories: ai
tags:
- ai
- bmad
- openspec
- sdd
- spec-kit
---

AI is completely revolutionizing the software industry in 2016. There is a new spec-driven development methodology: spec files are the source and generated code is the binary.

## Terminology

What does **Spec-Driven Development** mean? Birgitta Böckeler has disambiguated three definitions for this term in her article [Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html):

1. **Vibe Code**. Developers don't use any specs. The AI/LLM creatively makes up its own specs. The specs are lost when the context ends.
2. **Spec-First**. Developers pass specs to the context. The specs are lost when the context ends.
3. **Spec-Anchored**: Developers pass and persist specs in the code base. You and the AI/LLM are the coders.
4. **Spec-as-Source**: Developers pass and persist specs in the code base. The AI/LLM codes is the sole coder.

### Vibe Code (Pre-Spec-Driven Development)

In 2024 Vibe Coding was in vogue. Writing one-off throw-away projects was the output.

- This is the starting point for would-be AI-Native engineers.
- Example projects include writing a React/Redux tic-tac-toe game with rewindability.
- Note: The same prompt produces non-deterministic results.
- Pro-tip: Keep the size/complexity of the project small.

### Spec-First

Vibe Coders can improve their chat by including a spec file to their conversation.

### Spec-Anchored

No AI conversation lasts forever. The solution is Spec-Anchored: share spec files across multiple AI chat conversations. The benefit is resuming the development across sessions.

### Spec-As-Source

This is the game-changer. The spec files are treated as source while source code is now treated as assembly/binary code. Developers focus primarily on reading/writing spec files and reading source code but never writing directly to the source files. Instead they use the LLM to write source files via specs.

## Tooling

Three popular SDD tools include:

1. [BMAD]([BMAD](https://github.com/bmad-code-org/BMAD-METHOD))
2. [GitHub Spec-Kit](https://github.com/github/spec-kit)
3. [Fission-AI OpenSpec](https://github.com/Fission-AI/OpenSpec)
4. **Alternatives not explored/covered**: [Ralph Wiggum Script](https://ghuntley.com/ralph/), [Get-Shit-Done](https://github.com/gsd-build/get-shit-done), Kiro, Tessl

## Tooling Evaluation

Which tool is the king? The best method is to evaluate by experiencing all three tools. For a level evaluation I'll be building a **Todo Application** consisting of a frontend SPA, backend API, and Docker Compose hosting target.

### Functional Requirements

1. Unauthenticated/non-logged in users can access a single web page that has a list of unpaginated todo's.
2. Users can create/read/update/delete a single todo.
3. A todo is composed of a title, completed boolean, and `created_at` date+time.

### Non-functional Requirements

- **Accessibility**: All web pages must pass WCAG/AA
- **Code Coverage**: Must be greater than or equal to 70%
- **Docker Compose Profiles**: Developers can use profiles to switch between hosting environments
- **End-to-end integration tests**:
  - API: tested against an identical database
- **Rootless Docker containers**
- **HTTP-only**, no HTTPS.
- **Security Audit**: All code is verified for security
- **Performace**:
  - API: All HTTP requests must have a response time under 200 ms.
  - UI: All user interactions should provide immediate responses even if the actions have not been committed to the database

Below are the Git repositories:

1. BMAD (TODO: private! redo with a simple todo app)
2. Spec-Kit (TODO: private! open source it!)
3. OpenSpec (TODO: private! open source it!)

### Analysis

### BMAD

I started off with BMAD "planning" (or its Waterfall design phase):

- The **Product Manager** (PM) wrote a **Project Brief** and **PRD** (_Note: why it couldn't it reuse my original PRD without reformatting it to its built-in template?_).
- The **Technical Architect** (TA) wrote the **technical architecture** (_Note: this process felt waterfall-heavy - forcing you to research/provide technical decisions early - contradicting the Agile method_).
- The **UX Designer** (UX) provided **UX design specs** which included emotional journeys, wireframes, and a design system. _Note: I found using Figma MCP to be ideal for real projects in importing the design system_.

Pros:
- The BMAD tool asked systemic and thorough questions.
- BMAD provided me agents for every role in a software delivery team ranging from business, architects, UX design, and to testers.

Cons:
- The spec files were verbose to read.
- The BMAD workflows was opinionated/fixed/rigid which did not fit my simple project.
- Managing BMAD Epics/Stories was a _pain_:
  1) Stale information in docs
  2) the tool had trouble renumbering epics/stories (incomplete)
  3) I wanted to focus on managing safe rollback-friendly PR's, not epics/stories!
    - In future I would add constraints in BMAD's **Project Context** to make every story deployable with the above rules. Otherwise by default I got a **Big Bang Deployment** (large and risky PR's)!

Use Case:
- Medium/large, complex enterprise software projects that allow for waterfall-heavy design during the Project Discovery Phase.

### Spec-Kit

The tool was a middle ground between BMAD and OpenSpec.

It provides a rigid gated workflow with at least four states: `/specify` -> `/plan` -> `/tasks` -> `implement`.

Pros:
- The spec files were less verbose than BMAD.
- Although I wrote a spec for every code change (including small tasks and hotfixes), I found it less troublesome than managing BMAD Epics/Stories files.

Cons:
- No central shared memory bank like BMAD.
- The set of isolated specs provide a fragmented understanding to the developer
- The evolution of the specs has several comments/concerns listed here: https://github.com/github/spec-kit/discussions/152
- Adding new features has the risk of causing regression bugs in existing behaviour: https://www.linkedin.com/pulse/spec-driven-development-analysing-across-features-hari-krishnan--8cryc/

### Open-Spec

The tool uses delta specs and a spec archive.

Pros:
- The spec files were the lightest compared to BMAD and Spec-Kit.
- The light-weight nature of the tool makes it ideal for Agile development.

Cons:
- No central shared memory bank like BMAD.

Use Cases:
- Small/medium sized projects (prototyping, proof-of-concepts, personal use).

## Conclusion

You should codify SDD tool primary AI instructions features:
- BMAD's Project Context file.
- Spec-Kit's Constitution file.
- OpenSpec's Project file.

Pick a tool. All three were successful in generating both specs and quality working code.
- If you have a **large team**, a complex project, a desire for an Agile process, a desire for systemic and large spec files, then pick **BMAD**.
- If you have a **medium-sized team**, a desire for a phased gated workflow, a desire for isolated and temporal spec files, then pick **Spec-Kit**.
- If you have a **small team**, a desire for a lightweight process, a desire for small spec files, then pick **OpenSpec**.

## References

- https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
- https://docs.bmad-method.org/
- https://hashrocket.com/blog/posts/openspec-vs-spec-kit-choosing-the-right-ai-driven-development-workflow-for-your-team
- [Spec-Driven Development with OpenSpec - Source of Truth Specification](https://intent-driven.dev/blog/2025/11/09/spec-driven-development-openspec-source-truth/)
- [Evolving specs #152](https://github.com/github/spec-kit/discussions/152)
