# Student Guide — Run Everything Locally (No Cloud Required)

This guide takes you from **clone** → **running** the app on your machine using Docker.

## Prerequisites
- Docker Desktop (Windows/Mac) or Docker Engine (Linux)
- Git (or download ZIP)

## Steps

### 1) Clone
```bash
git clone <your-repo-url> to-do-app
cd to-do-app
```

### 2) Start with Docker
```bash
docker compose up --build
```

This launches:
- **db** (Postgres): port 5432 (Docker network)
- **api** (Fastify): <http://localhost:8080>
- **web** (React build): <http://localhost:5173>

### 3) Use the app
Open <http://localhost:5173> and add todos. Data is stored in the **local** Postgres container.

### 4) Stop / reset
```bash
# stop
Ctrl + C
docker compose down

# reset database (removes data)
docker compose down -v
```

## Troubleshooting

- **Ports in use (5173/8080/5432)**: Close other apps or edit ports in `docker-compose.yml`.
- **API can’t reach DB (Prisma P1001)**: Start/restart compose; DB may need a few seconds.
- **Double slashes // in requests**: Ensure `VITE_API_BASE` has **no trailing slash**.
