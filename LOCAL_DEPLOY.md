# Local “Deployment” — CI/CD Simulation

Practice deploying **without** cloud costs.

## Option A — Full stack with Compose (recommended)
```bash
docker compose up --build
```
This builds the backend image (Dockerfile), serves the frontend image, and runs Postgres.

## Option B — Build/run API image only
```bash
docker build -f backend/Dockerfile -t todo-api ./backend
docker run --rm -p 8080:8080   -e PORT=8080   -e DATABASE_URL='postgres://app:app@host.docker.internal:5432/appdb'   todo-api
```

## Option C — Run GitHub Actions locally (advanced)
Use `act` to simulate CI:
```bash
# macOS
brew install act

# run specific jobs
act -j backend
act -j frontend
```
