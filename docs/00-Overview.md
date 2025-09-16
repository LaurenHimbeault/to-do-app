# Overview


## Repository Structure
```
todo-app/ 
   README.md 
   docker-compose.yml 
   .github/ 
   workflows/ 
   backend/ 
   frontend/

```
- **Frontend:** React + Vite (TypeScript-ready)
- **Backend:** Fastify (Node.js) + Prisma ORM
- **Database:** PostgreSQL (Docker locally, Neon/Supabase in prod)
- **Containerization:** Docker + docker-compose
- **Deployment:** Cloud Run (backend) + Vercel (frontend) + Neon (DB)
- **Monorepo:** `frontend/` + `backend/` in one GitHub repo

---

[Next: Prerequisites](./01-Prerequisites.md) ➡️