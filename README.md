# Docker Get Started - Node.js Guide

**NIM:** 123103128  
**Repository:** docker-get-started-123103128  
**Guide Source:** [Docker Node.js Guide](https://docs.docker.com/guides/nodejs/) (Languages & Frameworks)

Proyek ini mengikuti panduan resmi Docker Languages & Frameworks untuk Node.js dengan TypeScript, Express, dan PostgreSQL, mencakup:
1. **Containerize a Node.js application**: Multi-stage `Dockerfile` dan `compose.yaml`.
2. **Use containers for development**: Integrasi database PostgreSQL, secrets, dan Compose Watch untuk hot-reloading.
3. **Run tests in a container**: Pengujian otomatis dengan Vitest dan Supertest di dalam container.

## Menjalankan Aplikasi
```bash
docker compose up --build
```
Akses aplikasi melalui `http://localhost:3000`.
