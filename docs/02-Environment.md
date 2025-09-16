# Environment Setup


## Backend `.env`


```bash
cd backend
cp .env.example .env


## Keys

**DATABASE_URL** — Postgres connection string

**Local**: postgres://app:app@localhost:5432/appdb

**Prod** (Neon): postgres://USER:PASSWORD@HOST/db?sslmode=require

**PORT** — server port (default 8080)

- Never commit secrets. Use platform secrets in production.
```

---

⬅️ [Prerequisites](./01-Prerequisites.md) | [Next: Local Development](./03-Local-Development.md) ➡️