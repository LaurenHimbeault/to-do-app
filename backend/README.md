# Backend — Fastify + Prisma

## Run with Docker (recommended)
```bash
docker compose up --build
# API: http://localhost:8080
```

## Run without Docker
```bash
cd backend
npm ci
npx prisma generate
cp .env.local.example .env.local
npm run dev
```

## Scripts
- `dev` — start with tsx
- `build` — compile TS → JS
- `start` — run compiled JS
- `prisma:generate`, `prisma:migrate`, `db:push`, `seed`

## Routes
- `GET /health`, `GET /__routes`
- `GET /todos`, `POST /todos`
- `PUT/PATCH /todos/:id`, `DELETE /todos/:id`
