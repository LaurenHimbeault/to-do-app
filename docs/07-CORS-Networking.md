# CORS & Networking


- Dev: `origin: "*"`
- Prod: restrict to frontend domain


```ts
app.register(cors, { origin: ["https://your-frontend.vercel.app"] })
```

- Health check: /health → { ok: true }

---

⬅️ [Previous: Deployment](./06-Deployment.md) | [Next: API Usage](./08-API-Usage.md) ➡️

