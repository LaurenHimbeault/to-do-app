# Docker Build & Run


## Backend image
```bash
cd backend
docker build -t todo-backend:local .
docker run --rm -p 8080:8080 --env-file .env todo-backend:local
```

## Frontend image (Optional)

```
cd frontend
docker build -t todo-frontend:local .
docker run --rm -p 5173:80 -e VITE_API_BASE=http://localhost:8080 todo-frontend:local
```

---

⬅️ [Local Development](./03-Local-Development.md) | [Next: Prisma Database](./05-Prisma-Database.md) ➡️