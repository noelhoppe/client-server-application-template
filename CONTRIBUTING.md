---
title: CONTRIBUTING.md
---

# Contributing to the Project

Thank you for your interest in contributing to the project! This page describes the ways you can contribute, as well as
some of our policies. This should guide you through your first issue or PR.

> Even if you can't contribute to our codebase, you can still help the project get better.
> The easiest way is to open up an issue if something isn't working.

## Project's folder structure
```
/
├── .github/                                        # GitHub specific configuration files (e.g. workflows, templates, etc.)
│   └── workflows/                                  # GitHub Actions workflows
│   └── pull_request_template.md                    # Pull request template
├── .starlight/                                     # Astro Starlight](https://starlight.astro.build/) documentation site. Please refer to [README.md](.starlight/README.md) for more details.
├── clients/                                        # TypeScript based clients for the client-server-application. Please refer to [README.md](clients/README.md) for more details.
├── server/                                         # Java / Spring Boot based server for the client-server-application. Please refer to [README.md](server/README.md) for more details.
├── skills/                                         # Agent skills following the [agentskills.io](https://agentskills.io) specification.
├── wiki/                                           # Wiki following the [Open Knowledge Format (OKF)](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing?hl=enen) specification.
├── .gitignore                                      # Files and folders to be ignored by Git
├── AGENTS.md                                       # Instructions for AI agents to work with this project
├── CLAUDE.md                                       # Symlink to AGENTS.md
├── GEMINI.md                                       # Symlink to AGENTS.md
├── README.md                                       # Project's main README file
├── CONTRIBUTING.md                                 # Project's main CONTRIBUTING file - you are here!
├── LICENSE                                         # Project's license file
├── compose.yaml                                    # Docker Compose file for orchestrating containers
```

## Guide for contributing
Please refer to the [Pull Request Template](.github/pull_request_template.md) for a detailed guide on how to contribute on this project. 
Consider especially the section "PR self-checklist" to ensure your contribution meets the project's standards.
