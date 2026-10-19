# 1407labs-website

Landing page for [1407labs.com](https://1407labs.com). Built with Vite + TypeScript, served by a Cloudflare Worker.

- `index.html`, `src/`: the site (Vite entry, TypeScript, CSS)
- `public/`: static files copied as-is (images go in `public/images/`)
- `worker/index.ts`: Worker; redirects `www` to the apex domain, serves the built site
- `wrangler.jsonc`: config; serves `dist/` and binds `1407labs.com` and `www.1407labs.com` as custom domains

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` deploy automatically via Cloudflare Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

The first deploy creates the DNS records for both domains. Don't add them by hand first, or the deploy will fail with a conflict.
