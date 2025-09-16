# API Usage


## Quick Tests
```bash
curl http://localhost:8080/health
```

# Create
```
todo
curl -X POST http://localhost:8080/todos \
-H 'content-type: application/json' \
-d '{"title":"Try Cloud Run"}'
```

# Read
```
curl http://localhost:8080/todos
```

# Update
```
curl -X PUT http://localhost:8080/todos/1 \
-H 'content-type: application/json' \
-d '{"done": true}'
```

# Delete
```
curl -X DELETE http://localhost:8080/todos/1
```
---

⬅️ [Previous: CORS & Networking](./07-CORS-Networking.md) | [Next: CI/CD](./09-CI-CD.md) ➡️
