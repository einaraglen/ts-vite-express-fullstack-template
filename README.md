# Fullstack TypeScript Template

A monorepo template for fullstack TypeScript applications using React and Express.

## Stack

**Client** — React 19, Vite 8, TailwindCSS 4, React Router 7, TanStack Query  
**Server** — Express 5, tsx (dev), tsup (build)  
**Shared** — TypeScript 6, npm workspaces, Prettier

## Getting started

```bash
npm install
npm run dev
```

| Service | URL |
|---|---|
| Client | http://localhost:3000 |
| Server | http://localhost:8080 |

The client dev server proxies `/api/*` requests to the server automatically.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start client and server in watch mode |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run start` | Run the production build |
| `npm run format` | Format all source files with Prettier |
| `npm run format:check` | Check formatting (for CI) |

## Project structure

```
├── client/         # React frontend
│   └── src/
├── server/         # Express backend
│   └── src/
└── dist/           # Production build output
    ├── index.js    # Bundled server
    └── public/     # Static client assets
```

## Production

```bash
npm run build
npm run start
```

The server serves the client as static files from `dist/public/`, so a single `node dist/index.js` process handles everything.
