# Health Tech Liberia Website

A React + Express full-stack application for Health Tech Liberia — a digital health nonprofit based in Liberia. The website showcases programs, projects, and research, and is planned to host a full Learning Management System (LMS) for digital health education.

## Run & Operate

- `pnpm --filter @workspace/htl-website run dev` — run the frontend (React/Vite)
- `pnpm --filter @workspace/api-server run dev` — run the API server (Express, port assigned via `PORT` env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (auto-provided by Replit)
- Required env: `SESSION_SECRET` — secret for session signing (set as Replit secret)

## Stack

- pnpm workspaces, Node.js 20, TypeScript 5.9
- Frontend: React 18, Vite, Tailwind CSS, shadcn/ui, Framer Motion, TanStack Query, Wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (Replit's built-in database, `DATABASE_URL` auto-set)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild

## Where things live

- `artifacts/htl-website/` — React frontend (Vite)
- `artifacts/api-server/` — Express API server
- `lib/db/` — Drizzle ORM schema and DB client
- `lib/api-spec/` — OpenAPI spec (source of truth for API contract)
- `lib/api-client-react/` — Generated React hooks (TanStack Query)
- `lib/api-zod/` — Generated Zod schemas
- `.migration-backup/` — Pre-migration backup, can be ignored

## Architecture decisions

- Path-based artifact routing: frontend at `/`, API at `/api`
- API contract is defined in OpenAPI spec (`lib/api-spec`); client hooks and Zod schemas are code-generated from it
- DB schema lives in `lib/db/src/schema/index.ts` — users table + sessions table (for auth)
- SESSION_SECRET is set as a Replit secret for session-based auth
- Auth uses bcrypt + express-session stored in Postgres (`sessions` table)

## Product

Health Tech Liberia website + planned LMS platform where students can enroll in digital health courses, complete lessons and assessments, and earn verifiable certificates. Courses are focused on digital health topics for the Liberian context.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always run `pnpm install` from the workspace root after pulling changes
- `DATABASE_URL` and `PORT` are auto-injected by Replit — do not hardcode them
- `SESSION_SECRET` must be set as a Replit secret; the API server throws on startup if missing
- The `.migration-backup/` directory contains a pre-migration snapshot; ignore its artifacts and workflows
- Sessions are stored in the `sessions` Postgres table (created by `connect-pg-simple` at runtime)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- LMS spec: `attached_assets/Pasted-Build-a-complete-production-ready-Learning-Management-S_1784367527240.txt`
