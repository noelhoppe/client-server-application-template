---
title: AGENTS.md
---

High-level instructions for AI agents working with the client server application monorepo project template currently supporting 
a backend api server using Java Spring Boot with Maven, and a web client frontend using Next.js with React, TypeScript and Tailwind CSS.

## Project Overview

---
Please refer to the [README.md](README.md) for:
- Local development instructions
- Containerized environments instructions
- Contributing guidelines including
  - Project's top-level folder structure
  - Guide for contributing
  - License information

## Agent Skills

---
The `skills/` directory contains modular capabilities following the [agentskills.io](https://agentskills.io) specification.

### Skill Discovery

Each skill has:

- `SKILL.md` with YAML frontmatter (name, description)
- Instructions for when and how to use the skill
- Optional: scripts, references, assets

### Key Skills
- [commit-work](skills/commit-work/SKILL.md)


### Using Skills

When a user requests a task matching a skill's description, activate that skill and follow its instructions.


## Wiki (Open Knowledge Format)

---

The `wiki/` directory contains structured project knowledge following the Open Knowledge Format (OKF). It serves as the project's long-term knowledge base, containing documentation, architecture decisions, design rationale, and domain knowledge in a machine-readable format.

### Knowledge Discovery

Each knowledge entry:
- Follows the Open Knowledge Format (OKF) specification
- Describes a single topic, concept, or decision
- May reference related knowledge entries
- Can be consumed by both humans and AI agents

Typical content includes:
- Architecture Decision Records (ADRs)
- Domain models
- Business rules
- System architecture
- Development guides
- Operational documentation

### Key knowledge entries


### Using the Wiki

Consult the wiki whenever a task requires project-specific knowledge that is not immediately available in the codebase.

Prefer the wiki over assumptions when making implementation decisions, understanding architecture, or interpreting business rules.

If multiple knowledge entries are relevant, combine them to build a complete understanding before proceeding.

