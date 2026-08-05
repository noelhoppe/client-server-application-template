---
type: Delivery Playbook
title: GHCR Release And Pull Request Images
description: Defines semantic release, container image tags, and preview-image lifecycle for the web and server services.
tags: [ ci-cd, ghcr, containers, semantic-versioning, review-apps ]
status: stable
sources:
  - id: semver
    resource: https://semver.org/
    title: Semantic Versioning 2.0.0
  - id: ghcr-actions
    resource: https://docs.github.com/en/actions/tutorials/publish-packages/publish-docker-images
    title: Publishing Docker images with GitHub Actions
  - id: okf
    resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
    title: Open Knowledge Format specification
---

# Purpose

The repository releases the web and server services as one application version. A successful release publishes a GitHub
release and immutable container image tags to GitHub Container Registry (GHCR). Pull requests additionally receive
preview image tags that a future review-app platform can deploy.

# Image Contract

| Service | GHCR image                            |
|---------|---------------------------------------|
| Server  | `ghcr.io/<owner>/<repository>-server` |
| Web     | `ghcr.io/<owner>/<repository>-web`    |

For repository `noelhoppe/client-server-application-template`, the current image names are:

* `ghcr.io/noelhoppe/client-server-application-template-server`
* `ghcr.io/noelhoppe/client-server-application-template-web`

For a stable or prerelease version `X.Y.Z`, both services publish these two tags for the same image digest:

* `X.Y.Z`
* `vX.Y.Z`

`X.Y.Z` is the SemVer version; the `v` form is the conventional Git tag and OCI tag alias. Build metadata (`+...`) is
deliberately rejected because it is not portable to Docker tag syntax. Pre-release identifiers such as `1.2.3-rc.1` are
accepted. No `latest`, major, or minor aliases are created.

# Release Flow

1. A pull request title must be a Conventional Commit, for example `feat(web): add profile page` or
   `fix(server): reject invalid request`.
2. The `continous_integration.yaml` workflow runs linting and tests. Pull requests that change either application module
   also build both container images.
3. On an internal pull request, the image workflow pushes:
    * `pr-<number>-<head-sha>`, an immutable image for a specific revision.
    * `pr-<number>`, the current mutable head of that pull request.
4. Fork pull requests use the same build path with `push: false`. They never receive GHCR credentials and cannot publish
   images.
5. After a merge into `main`, CI invokes `semantic-release` only after the required checks succeed. It derives the next
   version from the merge commit, creates Git tag `vX.Y.Z`, and creates the GitHub release.
6. When a new release exists, the reusable image workflow pushes both release tags for both services. The release
   workflow calls the image workflow directly because a tag created with `GITHUB_TOKEN` does not start a separate
   tag-push workflow.
7. Closing a pull request deletes GHCR package versions carrying that pull request's preview tags.

Semantic Versioning requires a declared public API and uses PATCH for backward-compatible fixes, MINOR for
backward-compatible functionality, and MAJOR for incompatible API changes.[^semver]

# Bootstrap

Before the first merge that should produce an automated release:

1. Ensure the working tree at the intended baseline is `main`.
2. Create and push the initial tag:

```bash
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
```

3. The `publish_tagged_images.yaml` workflow validates the tag and publishes the matching `0.1.0` and `v0.1.0` images.
4. Later qualifying merges into `main` are released automatically. The release job remains inactive until it detects an
   existing `vX.Y.Z` tag.

# Review-App Handoff

A future review-app deployment must consume the immutable `pr-<number>-<head-sha>` references for both services. It must
create a unique namespace or project name per pull request and recreate it when the head SHA changes. The deployment
platform, routing, secrets, and health checks are intentionally outside this workflow; the OCI tag contract is its
interface.

# Required Repository Settings

Configure these GitHub settings outside the repository:

* Allow GitHub Actions workflows to use a read/write `GITHUB_TOKEN` so release and package jobs can create releases,
  tags, and GHCR packages.[^ghcr-actions]
* Protect `main`, require the CI checks, and allow only squash merging. Keep the generated squash title unchanged so
  semantic-release receives the validated Conventional Commit.
* If the repository belongs to an organization, permit Actions in this repository to create and delete the two GHCR
  packages.

# Verification

* A `fix:` merge increments PATCH; a `feat:` merge increments MINOR; a breaking `feat!:` merge increments MAJOR.
* Both release tags resolve to the same manifest digest for each service.
* Internal pull requests publish both preview tag forms; fork pull requests do not publish.
* Closing an internal pull request removes matching preview package versions.
* Published images carry OCI source, revision, and version labels, plus Buildx provenance and an SBOM.

[^semver]: Semantic Versioning 2.0.0.

[^ghcr-actions]: Publishing Docker images with GitHub Actions.
