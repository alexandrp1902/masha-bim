# Repository Guidelines

## Project Structure & Module Organization
This repository is a Bun-managed Turborepo. The main app lives in `apps/editor` (Next.js UI, routes in `app/`, static assets in `public/`). Shared packages live in `packages/`: `core` contains scene schemas, state, and geometry systems; `viewer` contains rendering and viewer systems; `editor` contains editor-specific React components and tools; `ui` contains shared UI primitives. Tooling and shared TS configs live under `tooling/` and `packages/typescript-config`.

## Build, Test, and Development Commands
Run commands from the repository root.

- `bun install`: install workspace dependencies.
- `bun dev`: start the full development pipeline for the app and workspace packages.
- `bun build`: run production builds across workspaces with Turbo.
- `bun check`: run Biome format/lint checks.
- `bun check:fix`: auto-fix Biome issues where possible.
- `bun check-types`: run workspace TypeScript checks.

Use `bun check && bun check-types` before opening a PR.

## Coding Style & Naming Conventions
TypeScript and React are the default stack. Follow Biome formatting; do not hand-format around it. Use descriptive PascalCase for React components (`ViewerOverlay.tsx` pattern), camelCase for functions/hooks, and kebab-case for folders when the repo already uses it. Keep package boundaries clean: `packages/viewer` must not import from `apps/editor`. Prefer small, focused modules near the feature they support.

## Testing Guidelines
There is no dedicated test runner configured in the root workspace today. Treat `bun check` and `bun check-types` as the minimum validation gate, then verify behavior locally with `bun dev`. For UI or rendering changes, include manual test notes in the PR and add screenshots or recordings when behavior is visible.

## Commit & Pull Request Guidelines
Recent history uses Conventional Commits, for example `fix(viewer): await renderer.init()` and `feat: curved wall and fixes`. Use `feat`, `fix`, or another standard type, add an optional scope, and keep the subject imperative.

PRs should stay focused and include:

- a short summary of what changed and why
- linked issues, e.g. `Fixes #42`
- screenshots or video for visual/editor changes
- notes on manual verification steps

## Configuration Tips
Copy `.env.example` to `.env` only if you need optional integrations such as Google Maps search. The editor can run without extra secrets.
