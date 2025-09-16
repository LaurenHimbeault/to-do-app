# Architecture


```mermaid
flowchart LR
A[React Frontend (Vercel/Netlify)] -- HTTP --> B[Fastify API (Cloud Run)]
B -- Prisma --> C[(Postgres - Neon)]
subgraph Local Dev (docker-compose)
D[Frontend (nginx) :5173]
E[API :8080]
F[(Postgres :5432)]
D -- fetch --> E
E -- Prisma --> F
end
```

---

⬅️ [Previous: Troubleshooting](./10-Troubleshooting.md) | [Next: Enhancements](./12-Enhancements.md) ➡️
