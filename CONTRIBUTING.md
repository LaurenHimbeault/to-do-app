# Contributing (Students)

## Fork → run CI in your own repo
1) Click **Fork** on GitHub.  
2) In your fork, open the **Actions** tab and enable it if prompted.  
3) Push commits; CI runs automatically (no secrets required).  
4) Open a **PR** to the original repo; CI runs again with read-only permissions.

Our CI runs:
- **backend** job with a Postgres service (no secrets)
- **frontend** job (lint, typecheck, tests, build)

## Local dev
Use Docker:
```bash
docker compose up --build
```
Or see `backend/README.md` and `frontend/README.md` for Node-based runs.

## Don't forget!
- Keep PRs focused and small.
- Write descriptive commit messages.
- Passing CI is required before review.
