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

| Workflow                                                                         | Trigger                              | Goal                                                                                                                                          |
|----------------------------------------------------------------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [continous_integration.yaml](.github/workflows/continous_integration.yaml)       | pull request, push to `main`, manual | Orchestrates quality checks, validates Conventional Commit PR titles, builds PR preview images, and creates releases after a merge to `main`. |
| [build_and_publish_images.yaml](.github/workflows/build_and_publish_images.yaml) | reusable                             | Builds the server and web images, adds OCI metadata, and optionally publishes them to GHCR.                                                   |
| [release.yaml](.github/workflows/release.yaml)                                   | reusable                             | Creates a versioned GitHub release from Conventional Commits using semantic-release.                                                          |
| [publish_tagged_images.yaml](.github/workflows/publish_tagged_images.yaml)       | `v*` tag push                        | Validates an initial manual SemVer tag and publishes its server and web images.                                                               |
| [cleanup_preview_images.yaml](.github/workflows/cleanup_preview_images.yaml)     | pull request closed                  | Deletes GHCR image versions tagged for the closed pull request.                                                                               |
| [detect_changes.yaml](.github/workflows/detect_changes.yaml)                     | reusable, manual                     | Detects monorepo changes and exposes reusable change flags for CI orchestration and PR labeling.                                              |
| [label_pull_request.yaml](.github/workflows/label_pull_request.yaml)             | reusable, manual                     | Creates missing area labels and applies them to pull requests based on the detected changes.                                                  |
| [lint_server.yaml](.github/workflows/lint_server.yaml)                           | reusable, manual                     | Enforces the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html) on the [server](server) codebase.                  |
| [lint_web.yaml](.github/workflows/lint_web.yaml)                                 | reusable, manual                     | Enforces the [Prettier Style Guide](./clients/web/prettier.config.mts) on the [web client](clients/web) codebase.                             |
| [test_server.yaml](.github/workflows/test_server.yaml)                           | reusable, manual                     | Runs the Maven test lifecycle and publishes the Surefire test report.                                                                         |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project, including:

- Project's top-level folder structure
- Guide for contributing

## License

This project is licensed under the Apache 2.0 - see the [LICENSE](LICENSE) file for details
