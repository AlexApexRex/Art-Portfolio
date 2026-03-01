# Alex Li Portfolio (Single-Page Collections)

Minimalist paper-style portfolio with:

- light-first pastel design + optional dark mode
- category tiles that open a full collection view **without changing URL**
- 6 sample categories with 5 sample artworks each (30 total placeholders)
- responsive gallery cards with low-opacity previews + label fade on hover

## Files

- `index.html` — page sections, category + artwork templates
- `styles.css` — pastel theme, responsive layout, hover transitions
- `script.js` — data model and dynamic single-page collection behavior

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Customize

1. Replace your profile text in `index.html` (hero/about/contact).
2. Replace sample `categories` and `artworks` in `script.js` with your real work.
3. Update colors in `:root` in `styles.css`.
