# Fullstack TypeScript Template

A monorepo template for fullstack TypeScript applications using React and Express.

## Stack

**Frontend** — React 19, Vite 8, TailwindCSS 4, React Router 7, TanStack Query  
**Backend** — Express 5, tsx (dev), tsup (build)  
**Shared** — TypeScript 6, npm workspaces, Prettier

## Getting started

```bash
npm install
npm run dev
```

| Service | URL                   |
| ------- | --------------------- |
| Frontend | http://localhost:3000 |
| Backend  | http://localhost:8080 |

The frontend dev server proxies `/api/*` requests to the backend automatically.

## Scripts

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start frontend and backend in watch mode  |
| `npm run build`        | Build for production (outputs to `dist/`) |
| `npm run start`        | Run the production build                  |
| `npm run format`       | Format all source files with Prettier     |
| `npm run format:check` | Check formatting (for CI)                 |

## Project structure

```
├── frontend/       # React frontend
│   └── src/
├── backend/        # Express backend
│   └── src/
└── dist/           # Production build output
    ├── index.js    # Bundled backend
    └── public/     # Static frontend assets
```

## Production

```bash
npm run build
npm run start
```

The backend serves the frontend as static files from `dist/public/`, so a single `node dist/index.js` process handles everything.
