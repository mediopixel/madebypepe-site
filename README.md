# madebypepe-site

Portfolio → [madebypepe.com](https://madebypepe.com). Code · Art · Design · AI.

## Stack

Vite + React + TypeScript, **vite-react-ssg** (each route prerendered to static HTML),
Tailwind v4.

## Scripts

```bash
npm run dev        # dev server
npm run build      # build + prerender to dist/
npm run preview    # serve dist/
npm run typecheck  # tsc
npm run lint       # eslint
```

## Deploy — Cloudflare Workers

Assets-only Worker (no script) serving `dist/`, see `wrangler.toml`. The repo is connected
to Workers Builds and redeploys on every push to `main`.

- **Build command**: `npm run build` · **Deploy command**: `npx wrangler deploy` · **Node**: 20 (`.nvmrc`).
- **Domains**: `madebypepe.com` and `www.madebypepe.com` as `custom_domain` routes. The DNS
  zone lives in Cloudflare; email (MX/IMAP/SMTP) stays on Hostalia as DNS-only records.
