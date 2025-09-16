# Local Development


## Run with Docker Compose (recommended)
```bash
docker compose up --build -d
```

API → http://localhost:8080

Health → http://localhost:8080/health

Todos → http://localhost:8080/todos

Frontend (optional container) → http://localhost:5173

### Apply DB schema + seed data

```
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run seed
```

### Logs

```
docker compose logs -f
docker compose logs -f api
docker compose logs -f db
```

### Stop / Reset

```
docker compose down
# stop + delete db volume (⚠wipes data)
docker compose down -v
```

## Run without Docker 
1. Start Postgres locally / in Docker / via Neon

2. Backend:

```
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

3. Frontend:

```
cd frontend
npm install
npm run dev
```

- Set VITE_API_BASE=http://localhost:8080 in frontend/.env.local.


---

⬅️ [Environment](./02-Environment.md) | [Next: Docker](./04-Docker.md) ➡️
