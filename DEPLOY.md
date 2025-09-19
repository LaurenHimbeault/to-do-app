# Deploy LIVE — Railway + Vercel

Again, this is just one option! You can do all sorts of things and it's up to you!

## API on Railway
- Service root: `backend`
- Build: **Dockerfile** at `backend/Dockerfile`
- Public networking: on (port **8080**)
- Env vars:
  - `PORT=8080`
  - `DATABASE_URL=postgres://USER:PASS@HOST:5432/DB?sslmode=require&pgbouncer=true&connect_timeout=15`

## Web on Vercel
- Project root: `frontend`
- Env var:
  - `VITE_API_BASE=https://<your-railway>.up.railway.app` *(no trailing slash)*

**CORS** is already configured in the API for localhost and `*.vercel.app`.
