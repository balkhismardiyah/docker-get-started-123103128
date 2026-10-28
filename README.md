# Docker Get Started - Node.js Guide

**NIM:** 123103128  
**Repository:** docker-get-started-123103128  
**Guide Source:** [Docker Node.js Guide](https://docs.docker.com/guides/nodejs/) (Languages & Frameworks)

Repository ini dibuat untuk memenuhi tugas Docker Get Started dengan mengikuti panduan resmi Docker Languages & Frameworks untuk Node.js dengan TypeScript, Express, PostgreSQL, dan Vitest.

---

## Cakupan Langkah Panduan (Steps Followed)

1. **Containerize a Node.js Application**
   - Multi-stage `Dockerfile` (`builder`, `deps`, `runner`) dengan base image Alpine yang aman dan efisien.
   - Konfigurasi `compose.yaml` untuk menjalankan service web Express.
   - Konfigurasi `.dockerignore` dan `.gitignore`.

2. **Use Containers for Node.js Development**
   - Integrasi database PostgreSQL dengan Docker Secrets (`db/password.txt`).
   - Fitur hot-reload dan sinkronisasi file menggunakan **Compose Watch** (`develop.watch`).
   - Persistent data volume untuk PostgreSQL.
   - REST API CRUD Hero (`/heroes/`), status endpoint (`/`), dan healthcheck (`/health`).

3. **Run Node.js Tests in a Container**
   - Unit testing endpoint menggunakan **Vitest** dan **Supertest**.
   - Menambahkan stage `test` pada `Dockerfile`.
   - Menjalankan pengujian otomatis di dalam container tanpa ketergantungan database.

---

## Cara Menjalankan

### 1. Menjalankan Server & Database
```bash
docker compose up --build
```
Aplikasi akan tersedia pada:
- **Web API:** `http://localhost:3000`
- **Health Check:** `http://localhost:3000/health`
- **Heroes Endpoint:** `http://localhost:3000/heroes/`

### 2. Menjalankan di Background (Detached Mode)
```bash
docker compose up --build -d
```
Untuk menghentikan:
```bash
docker compose down
```

### 3. Menjalankan Test di Dalam Docker Container
```bash
docker compose run --build --rm --no-deps server npm test
```

### 4. Menjalankan Test Secara Lokal (Opsional)
```bash
npm install
npm test
```
