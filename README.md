# homepages for tek tek oy

The homepage for Tek Tek Oy. It works the same way as the CRM project: the look, the copy and the page layout are all in JSON files in `config/`, and a small Express server sends them to the browser. The browser script builds the page from them. You can change the site without touching the code.

## Run it

```bash
npm install
npm start
```

Open http://localhost:3000.

## Where things live

| File | What it controls |
|------|------------------|
| `config/theme.json` | Colors, fonts, spacing, max width. Becomes CSS variables. |
| `config/texts.json` | All visible text, including nav and footer. Finnish by default. |
| `config/pages.json` | Which pages exist (`path`) and which sections each one shows, in order. |
| `public/app.js` | Builds the page from the config. One renderer per section type. |
| `public/style.css` | Layout and component styles. Colors come from `theme.json`. |
| `public/brand/` | Logo files. |
| `brand/BRAND.md` | Brand guide: name, idea, logo rules, colors, type. |
| `src/server.js` | Serves `public/`, `/api/config`, and one route per page in `pages.json`. |

## Add a section

1. Add the text under `home` in `config/texts.json`, using the same key.
2. Add the section to the `sections` list of that page in `config/pages.json`, with its `type`.
3. If the type is new, add a renderer in `public/app.js` and the matching styles in `public/style.css`.

## Add a page

Add an entry to `config/pages.json` with `path`, `file`, and `sections`. Add the texts under a new key in `config/texts.json`. Create the HTML file in `public/`, with the same structure as `index.html`, and set `data-page` to the new key.

## Placeholder content

All copy is placeholder text that says what to replace. The email, phone and Y-tunnus in `texts.json` are placeholders too.
