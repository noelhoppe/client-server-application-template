---
title: Pull Request Template
---

## Include as much of the following information as possible.

### _Summary of changes_

Provide a concise overview of the implemented changes. Focus on what was changed rather than how it was implemented.

### _Reasoning_

Explain why these changes were necessary. Include the problem being solved, business requirements, technical
motivations, or related improvements.

### _Additional context_

Add any information that may help reviewers understand the changes, such as dependencies, limitations, migration steps,
or related pull requests.

### _Review explanations_

Highlight areas that require special attention during the review. Explain any design decisions, trade-offs, or
non-obvious implementation details.

### _Discussion points_

List any open questions, concerns, or topics where feedback from reviewers is specifically requested.

### _Follow-up tasks_

Describe work that is intentionally out of scope for this pull request and should be addressed in future tasks or pull
requests.

## Screenshots

_In case your PR includes visual changes, please include before and after screenshots here._

## PR self-checklist

- [ ] Are related issues linked to this pull reuqest, see here for instructions:
  [Linking a pull request to an issue
  ](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue)
- [ ] I have commented my code. Especially function's and/or method's parameters, return values and any complex logic.
- [ ] My code follows the style guidelines of this project.
- [ ] I have made corresponding changes to the documentation.
- [ ] My changes generate no new warnings.
- [ ] All jobs and checks have passed.
- [ ] I have added the appropriate labels to this pull request, see here for instructions:
  [Managing labels](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels) - is
  automated via the [label_pull_request.yaml](workflows/label_pull_request.yaml) workflow.
    - [ ] **area:github** for changes inside `.github` folder - Changes to GitHub files.
    - [ ] **area:workflows** for changes inside `.github/workflows` folder - Changes to GitHub Actions / Workflows
      (CI/CD).
    - [ ] **area:server** for changes inside `server` folder - Changes to the server module.
    - [ ] **area:java** for changes inside `server/src/main/java` or `server/src/test/java` folder - Changes to Java
      code.
    - [ ] **area:clients** for changes inside `clients` folder - Changes to the clients module.
    - [ ] **area:webclient** for changes inside `clients/web` folder - Changes to the web client.
    - [ ] **area:skills** for changes inside `skills` folder - Changes to agent skills following
      the [agentskills.io](https://agentskills.io/home) specification.
    - [ ] **area:wiki** for changes inside `wiki` folder - Changes to repository knowledge base content following
      the [Open Knowledge Format (OKF)](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing?hl=en).
    - [ ] **area:dependencies** for dependencies or sdk updates (such as `clients/**/package*.json`,
      `clients/**/.nmvrc`, `server/**/pom.xml` or `server/.sdkmanrc`) - Dependency or SDK changed
- [ ] I have assigned at least the minimum number of required reviewers to this pull request, see here for instructions:
  [Requesting a pull request review](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)
- [ ] I have written conventional commit messages,
  see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more details.
- [ ] Pull request title starts either with a verb in the present tense
- (e.g., _"Add: "_, _"Fix: "_, _"Update: "_) or with a prefix indicating the type of change (e.g., _"Feature: "_, _"
  Bugfix: "_, _"Hotfix: "_, _"Refactor: "_).
- [ ] I have performed a self-review of my own code.
