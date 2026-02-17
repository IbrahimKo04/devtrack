# DevTrack

DevTrack is a simple full‑stack web application for tracking issues and releases. It was built mainly as a **learning project** to understand how frontend, backend, and CI work together.

The goal of this project is not to be feature‑rich, but to practice **real development workflows** used in production systems.

---

## What This Project Does

* Create and list issues
* Create and list releases
* Basic React frontend
* Simple Node.js + Express backend
* Frontend CI using GitHub Actions

---

## Tech Stack

* Frontend: React + Vite
* Backend: Node.js + Express
* CI: GitHub Actions

---

## Project Structure

```
devtrack/
├── frontend/        # React frontend
├── backend/         # Express backend
└── .github/
    └── workflows/   # CI pipelines
```

---

## How It Works (Development)

```
Browser
  ↓
Frontend (Vite Dev Server)
  ↓  (/api proxy)
Backend (Express API)
```

* Frontend sends requests to `/api/*`
* Vite proxies requests to the backend during development
* This avoids CORS issues and keeps setup simple

---

## Running Locally

### Backend

```bash
cd backend
npm install
node src/server.js
```

Runs on:

```
http://127.0.0.1:5000
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## CI

The project includes a **basic frontend CI pipeline**.

It runs on every push and pull request and checks that:

* dependencies install correctly
* the frontend builds successfully

This helps catch obvious breakages early.

---

## Future Plans

This project can be expanded gradually as learning continues.

### Cloud & Deployment

* Deploy backend on AWS EC2
* Serve frontend as static files (S3 / Nginx)
* Use Nginx as a reverse proxy
* Add environment‑based configuration

### Application Features

* Edit / delete issues
* Issue status updates
* Better UI and UX
* User authentication
* Pagination and filtering

### DevOps Improvements

* Backend CI pipeline
* Dockerize frontend and backend
* Automated deployment
* Basic monitoring and logging

---

## Author

Ibrahim Kothari

Built as a personal learning project.

---

## License

MIT
