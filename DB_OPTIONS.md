# Database Options

## Default (recommended): Local DB via Docker
- No cloud setup or cost.
- Already wired in `docker-compose.yml`.
- `DATABASE_URL=postgres://app:app@db:5432/appdb`
- The docker file will spin up a local postgres DB for you (no persistence outside the container though don't forget that)
- If you do want persistence between runs, you can add a named volume to docker-compose.yml:
```
db:
  image: postgres:16-alpine
  environment:
    POSTGRES_USER: app
    POSTGRES_PASSWORD: app
    POSTGRES_DB: appdb
  ports: ["5432:5432"]
  volumes:
    - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:

```
**Remember** When Docker Compose spins up the ```postgres:16-alpine``` container, by default it stores data inside the container filesystem. If you run: ```docker compose down -v```, the ```-v``` removes the volume, wiping the DB completely. That’s actually nice for teaching, because it keeps things clean and students can reset easily.

**Safety tips**: limit pool connections, add simple rate limits for writes, pause DB when not in use.

## Student’s own Neon 
Students can create a free Neon project and plug in their own credentials:
```dotenv
PORT=8080
DATABASE_URL=postgres://<user>:<pass>@<host>:5432/<db>?sslmode=require&pgbouncer=true&connect_timeout=15
```

**Note:** You **do not** have to use Neon. I just set up Neon for my project. Your project's can use any database, some common choices include Neon, Supabase, RDS, MongoDB