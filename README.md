# HNG DEVOPS Stage 1 API

A simple Express.js REST API built with TypeScript for HNG14 Devops stage 1 challenge.

## Overview

This project is a simple server, maybe the simplest express setup out there, just to get a request-response backend.
The main point of this challenge is getting it to run in your remote linux server provisioned with nginx in stage 0. A linux server was provisioned with nginx in stage 0. With that server, we served static files for responses, by defining the server and location for each route, pointing to a html file, or writing raw JSON response.
Now, the goal was to run the server locally in the remote linux server, and use nginx with pem2 to route requests from outside into the locally-running server

## Tech Stack

- Running Backend:
  - **Runtime:** Node.js
  - **Framework:** Express.js 5.2.1
  - **Language:** TypeScript 6.0.2
  - **Package Manager:** pnpm
  - **Additional Libraries:** CORS support

- Deployment
  - AWS EC2 Instance
  - Nginx
  - PEM2
  - Certbot

Deployed live [here](https://hngtask1wilfrid.mooo.com/)

## API Endpoints

### 1. Root Endpoint
**GET** `/`

Returns a simple status message indicating the API is running.

**Response:**
```json
{
  "message": "API is running"
}
```

---

### 2. Health Check
**GET** `/health`

Returns a health status indicating the server is operational.

**Response:**
```json
{
  "message": "Healthy"
}
```

---

### 3. Personal Information
**GET** `/me`

Returns personal information about the developer.

**Response:**
```json
{
  "name": "Wilfrid Okorie",
  "email": "wilfridokorie@gmail.com",
  "github": "https://github.com/OWK50GA"
}
```

---

## Features

- ✅ CORS enabled for cross-origin requests
- ✅ JSON request/response handling
- ✅ TypeScript support for type safety
- ✅ Hot-reload development environment
- ✅ Production-ready build configuration

## Project Structure

```
backend_stage_2/
├── src/
│   └── index.ts           # Main application file
├── dist/                  # Compiled JavaScript (generated)
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
├── pnpm-lock.yaml        # Dependency lock file
└── README.md             # This file
```

## License

ISC
