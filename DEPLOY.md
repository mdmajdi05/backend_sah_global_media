# Backend Deployment & Local Run

Required env vars (example):
- DATABASE_URL=postgresql://postgres:password@db:5432/sahdb
- PORT=3000
- JWT_SECRET=your-secret
- CLOUDINARY_URL=...

Local Docker (with included Postgres):
```bash
docker compose up --build
```

Build and run image manually:
```bash
docker build -t my-backend:latest .
docker run --env-file .env -p 3000:3000 my-backend:latest
```

GitHub Actions notes:
- Workflow builds and pushes to GHCR using tag `ghcr.io/<owner>/<repo>:<sha>`.
- No extra secrets required for GHCR push in standard setup (uses `GITHUB_TOKEN`).
- For external registries add `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets.

Adjust `docker-compose.yml` if using managed DBs: remove `db` service and set `DATABASE_URL` accordingly.

Repository notes:
- These files (`Dockerfile`, `docker-compose.yml`, `.github/workflows/backend-ci.yml`, `DEPLOY.md`) are prepared so you can copy the `backend` folder into its own GitHub repository. When moved, ensure the workflow YAML is placed at `.github/workflows/backend-ci.yml` in that repository.

