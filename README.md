# Backend Stage 2 API

A simple Express.js REST API built with TypeScript for HNG14 backend stage 2 challenge.

## Overview

This project provides a basic API server with health checks and personal information endpoints. It demonstrates fundamental backend development concepts including routing, middleware setup, and CORS configuration.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js 5.2.1
- **Language:** TypeScript 6.0.2
- **Package Manager:** pnpm
- **Additional Libraries:** CORS support

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- pnpm 10.24.0

### Installation

```bash
# Install dependencies
pnpm install
```

### Running the Server

**Development mode (with auto-reload):**
```bash
pnpm dev
```

**Production build and run:**
```bash
pnpm build
pnpm start
```

**Format code:**
```bash
pnpm format
```

The server will start on port `3001` by default. You can change this using the `PORT` environment variable:

```bash
PORT=5000 pnpm start
```

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
