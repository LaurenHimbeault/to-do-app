# Database with Prisma


- **Schema:** `backend/prisma/schema.prisma`


## Generate client

```bash
cd backend
npm run prisma:generate
```

## Migrations

```
npm run prisma:migrate
npm run prisma:deploy # prod
```

## Seed

```
npm run seed
```


**Note**: For Neon, ensure sslmode=require in DATABASE_URL.

---

⬅️ [Previous: Docker](./04-Docker.md) | [Next: Deployment](./06-Deployment.md) ➡️
