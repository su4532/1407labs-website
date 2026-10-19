# 1407labs-website

The internet home of [1407 Labs](https://1407labs.com) — an apartment for cracked individuals.
A Frutiger Aero desktop: every section is a glass window, with a taskbar instead of a nav. Built with Vite + TypeScript, served by a Cloudflare Worker.

## Editing content

You almost never need to touch layout code. Content lives in `src/data/`:

| File | What's in it |
| --- | --- |
| `src/data/site.ts` | Hero taglines, About copy + stat tiles, contact email & social links |
| `src/data/residents.ts` | Resident cards (name, website, photo in `public/residents/`) |
| `src/data/projects.ts` | Project cards — the section stays hidden until this list has entries |

## Structure

```
index.html              page shell + fonts
public/                 static files served as-is (favicon, images)
src/
  main.ts               assembles sections, turns on effects
  data/                 all the content (see above)
  sections/             one module per section, each returns HTML
                        (window.ts is the shared Aero window, wallpaper.ts the background)
  fx/                   bubbles, clocks/tagline/parallax, window buttons, resident search, reveal
  styles/
    tokens.css          colors, fonts, radii — change the whole look here
    base.css            reset, wallpaper, headings, window-open animation
    aero.css            windows, buttons, taskbar, start orb, bubbles
    hero.css            desktop wordmark + gadgets
    sections.css        about, residents, projects, contact, footer
worker/index.ts         Cloudflare Worker: www → apex redirect, serves dist/
wrangler.jsonc          Worker config + custom domains
```

All motion respects the OS "reduce motion" setting.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` deploy automatically via Cloudflare Workers Builds
(build command `npm run build`, deploy command `npx wrangler deploy`).
