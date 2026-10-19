# 1407labs-website

Landing page for [1407labs.com](https://1407labs.com), served by a Cloudflare Worker.

- `public/index.html`: the page
- `src/index.js`: Worker; redirects `www` to the apex domain, serves `public/`
- `wrangler.jsonc`: config; binds `1407labs.com` and `www.1407labs.com` as custom domains

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npx wrangler login
npm run deploy
```

The first deploy creates the DNS records for both domains. Don't add them by hand first, or the deploy will fail with a conflict.
