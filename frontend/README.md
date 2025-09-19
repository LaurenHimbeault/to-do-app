# Todo App — Student Friendly Starter

Welcome! This project is designed to be run **entirely locally** with Docker, so you can learn full-stack development without any cloud setup. It also includes optional guides for deploying and for using a cloud database if you want.

## What’s inside

- **Backend**: Fastify + Prisma + Postgres
- **Frontend**: React + Vite
- **Local dev (default)**: Docker Compose
- **CI**: GitHub Actions (lint, typecheck, tests)
- **Deploy (optional)**: Railway (API) + Vercel (web)

## Quick Start (2 commands)

```bash
git clone <your-repo-url> to-do-app
cd to-do-app
docker compose up --build
```

- Frontend - <http://localhost:5173>  
- API Health - <http://localhost:8080/health>  
- API Routes - <http://localhost:8080/__routes>

---

## Learning Path (start here)

1. **Run it locally with Docker** - [STUDENT_GUIDE.md](STUDENT_GUIDE.md)  
2. **Understand your “fake deploy” locally** - [LOCAL_DEPLOY.md](LOCAL_DEPLOY.md)  
3. **Database choices** (local vs shared vs your own) - [DB_OPTIONS.md](DB_OPTIONS.md)  
4. **(Optional) Deploy for real** - [DEPLOY.md](DEPLOY.md)  
5. **Contribute via forks & PRs with CI** - [CONTRIBUTING.md](CONTRIBUTING.md)

Extras Resources for Understanding: [TEACHING_NOTES.md](TEACHING_NOTES.md)

---

## Project Layout

```
backend/     # API (Fastify, Prisma)
frontend/    # Web (React + Vite)
docker-compose.yml
```

## Local env templates

- `backend/.env.local.example` → copy to `.env.local`  
- `frontend/.env.local.example` → copy to `.env.local`

That’s it—have fun!
