# tek tek oy homepage

The homepage for tektek.fi. A static site: no server, just files. Cloudflare Pages serves the `public/` folder.

## Change the site

- `config/theme.json`: colours and fonts.
- `config/texts.json`: all visible text. The two conversation lines are under `home.hero.lines`.
- `config/pages.json`: pages and their sections.
- `public/brand/tektek-logo.svg`: the logo. It comes from `tektek-brand`.

After changing anything in `config/`, rebuild the file the page reads, then commit:

```bash
node scripts/build-config.js
```

## Preview locally

```bash
cd public
python3 -m http.server 8000
```

Open http://localhost:8000.

## Go live

Cloudflare Pages deploys from this repo on every push to `main`. Settings: build command empty, output directory `public`.
