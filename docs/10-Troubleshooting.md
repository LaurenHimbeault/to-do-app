# Troubleshooting


## Common Errors


**`PrismaClientInitializationError: connect ECONNREFUSED 127.0.0.1:5432`**
- DB not up or wrong URL.
- Check `docker compose logs db`.


**API can’t reach DB in Docker Compose**
- Use `db:5432` inside compose, not `localhost`.


**CORS error**
- Ensure Fastify CORS plugin is registered.


**Cloud Run 502/404**
- Ensure backend listens on `0.0.0.0:$PORT`.


**PermissionDenied in GitHub Actions deploy**
- Service account needs roles: `run.admin`, `storage.admin`, `iam.serviceAccountUser`.


**Frontend can’t reach API**
- Check `VITE_API_BASE` and CORS.

---

⬅️ [Previous: CI/CD](./09-CI-CD.md) | [Next: Architecture](./11-Architecture.md) ➡️
