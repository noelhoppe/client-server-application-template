---
title: README.md
---

# Monorepo project template for client-server applications

## Local development

Please refer to the client module's [README.md](./clients/README.md) for client-side script reference and the server
module's [README.md](./server/README.md) for server-side script reference. Refer to the starlight
module's [README.md](./.starlight/README.md) for starlight module script reference.

## Containerized environments

```bash
docker compose up
```

## Continuous Integration and Continuous Delivery / Deployment (CI/CD)

### Workflow Reference

| Workflow                                                                   | Trigger                          | Goal                                                                                                                    |
|----------------------------------------------------------------------------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [continous_integration.yaml](.github/workflows/continous_integration.yaml) | pull_request, workflow_dispatch  | Orchestrates the CI pipeline, detects affected areas, and calls reusable linting and PR-labeling workflows.             |
| [detect_changes.yaml](.github/workflows/detect_changes.yaml)               | workflow_call, workflow_dispatch | Detects monorepo changes and exposes reusable change flags for CI orchestration and PR labeling.                        |
| [label_pull_request.yaml](.github/workflows/label_pull_request.yaml)       | workflow_call, workflow_dispatch | Creates missing area labels and applies them to pull requests based on the detected changes.                            |
| [lint_server.yaml](.github/workflows/lint_server.yaml)                     | workflow_call, workflow_dispatch | Enforce [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html) on the [server](server) codebase. |
| [lint_web.yaml](.github/workflows/lint_web.yaml)                           | workflow_call, workflow_dispatch | Enforce [Prettier Style Guide](./clients/web/prettier.config.mts) on the [web client](clients/web) codebase.            |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project, including:

- Project's top-level folder structure
- Guide for contributing

## License

This project is licensed under the Apache 2.0 - see the [LICENSE](LICENSE) file for details
