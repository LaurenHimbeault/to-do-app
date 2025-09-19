# Teaching Notes (Instructor)

## Cost & safety
- Default to **local DB via Docker** for all students.
- If you expose a class Neon DB:
  - Create a **limited** role for students.
  - Lower PgBouncer pool size; add simple write rate limits.
  - **Rotate** creds or **pause** Neon immediately after sessions.

## CI/CD
- Repo includes a fork-safe CI (no secrets).
- Optional branch protection: require CI jobs to pass on PRs.

## Common pitfalls to watch
- `VITE_API_BASE` trailing slash → `//todos` 404s.
- Prisma `P1001` early during boot → DB not yet reachable; the app now retries.
- Docker cache weirdness → ask students to run `docker compose up --build` after changes.

## Nice extensions (later)
- Add e2e tests (Playwright) against the running Docker stack.
- Add JMeter/Gatling load tests against the API.
- Add feature flags or an auth layer for advanced labs.
