# Todo App — Student Starter

Welcome! This project is a **full-stack Todo app** built for learning purposes.  
It’s designed so you can run everything **locally** with Docker, explore the code,  
and (optionally) try deploying it with cloud services.

---

## Quick Start (local with Docker)

Clone the repo and start all services in one command:

```bash
git clone <your-repo-url> to-do-app
cd to-do-app
docker compose up --build
````

* Frontend: [http://localhost:5173](http://localhost:5173)
* API health: [http://localhost:8080/health](http://localhost:8080/health)
* API routes: [http://localhost:8080/\_\_routes](http://localhost:8080/__routes)

Stop with `Ctrl+C` and clean up with:

```bash
docker compose down
```

---

## Learning Path

Choose where you want to start:

1. **Run it locally with Docker** → [STUDENT\_GUIDE.md](STUDENT_GUIDE.md)
2. **Simulate a deployment on your own computer** → [LOCAL\_DEPLOY.md](LOCAL_DEPLOY.md)
3. **Understand database options** (local, shared, or your own Neon) → [DB\_OPTIONS.md](DB_OPTIONS.md)
4. **(Optional) Deploy to cloud** (Railway + Vercel) → [DEPLOY.md](DEPLOY.md)
5. **Contribute with GitHub forks + CI** → [CONTRIBUTING.md](CONTRIBUTING.md)

Review some of my teching notes if you want: 🧑‍[TEACHING\_NOTES.md](TEACHING_NOTES.md)

---

## Project Structure

```
backend/     # Fastify API with Prisma + Postgres
frontend/    # React app with Vite
docker-compose.yml
```

---

## ⚙️ Local Environment Templates

Copy and adjust for your setup:

* `backend/.env.local.example` → `.env.local`
* `frontend/.env.local.example` → `.env.local`

---

## What you’ll learn

* Running full-stack apps locally with Docker
* Connecting frontend and backend
* Using a Postgres database with Prisma
* Continuous Integration with GitHub Actions
* Optional: deploying to Railway + Vercel

