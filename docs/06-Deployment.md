# Deployment


## 1. Create a Neon Postgres
- Create project → copy connection string.
- Add as secret (`DATABASE_URL`) in GitHub/Cloud Run.


## 2. Deploy Backend (Cloud Run)


### Option A: Manual CLI

```bash
docker build -t gcr.io/<GCP_PROJECT_ID>/todo-api ./backend
gcloud auth configure-docker
docker push gcr.io/<GCP_PROJECT_ID>/todo-api
gcloud run deploy todo-api \
--image gcr.io/<GCP_PROJECT_ID>/todo-api \
--region <REGION> \
--platform managed \
--allow-unauthenticated \
--set-env-vars DATABASE_URL='postgres://...sslmode=require'
```

### Option B: GitHub Actions

- Secrets: GCP_PROJECT_ID, GCP_REGION, GCP_SA_KEY, DATABASE_URL
- Workflow: .github/workflows/deploy-backend.yml

## 3. Deploy Frontend (Vercel/Netlify)

- Root = frontend/
- Env = VITE_API_BASE = <Cloud Run URL>

---

⬅️ [Previous: Prisma Database](./05-Prisma-Database.md) | [Next: CORS & Networking](./07-CORS-Networking.md) ➡️
