# Portfolio Site

A simple, no-auth company/personal portfolio with three pages: Home, Products, and Research.
Built with React + Vite, react-router, and framer-motion. Styled with a dark glassmorphism theme.

## Run it

```
npm install
npm run dev
```

Build for production:

```
npm run build
npm run preview
```

## How to update content (no code changes needed)

Everything you'll edit day-to-day lives in `src/data/`:

- **`src/data/profile.js`** — brand name, hero tagline/subtext, Vision & Mission text, contact email and social links.
- **`src/data/products.js`** — the Products grid. Each item has:
  - `type`: `"app"` (shows Download APK button — put your Google Drive APK link in `link`), `"website"` (shows Visit Website — put the live URL in `link`), or `"model"` (shows View on GitHub — put the repo URL in `link`).
  - `cover`: an image URL for the card.
  - `doc`: the full guide text shown when someone clicks "Read guide". Use `## Heading` for sub-headings and `- item` for bullet points.
- **`src/data/research.js`** — the Research grid. Each item has a `title`, `description`, `cover` image, and `pdf` (a shareable Google Drive link — set sharing to "Anyone with the link").

To add a new product or paper, just copy an existing object in the array and edit the fields — no other file needs to change.

## Deploying via GitHub

Push this repo to GitHub, then connect it to Vercel, Netlify, or GitHub Pages for automatic deploys. Any edit you commit to `src/data/*.js` will redeploy with the new content — no rebuild steps beyond the normal `npm run build` the host runs for you.
