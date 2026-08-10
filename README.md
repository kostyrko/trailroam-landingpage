# Trailroam for Strava — Landing Page

Static landing page for the **Trailroam for Strava** Chrome extension.
Built with [Astro](https://astro.build), deployed to GitHub Pages at
**<https://kostyrko.github.io/trailroam-landingpage/>**.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/trailroam-landingpage/
```

## Build

```sh
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Deploy

Deployment is automatic via `.github/workflows/deploy.yml` on every push to `main`.

One-time setup in GitHub → **Settings → Pages → Source = "GitHub Actions"**.

## Screenshots

Product screenshots live in `public/screenshots/`:

| File                | Used for                 |
| ------------------- | ------------------------ |
| `overview.png`      | Hero / Private section   |
| `map-view.png`      | One map section          |
| `routes.png`        | Smart sync section       |
| `details.png`       | Filter & find section    |
| `export.png`        | Export & share section   |

Replace any of these to update the imagery. The OG/social preview image is
`overview.png` (configured in `src/layouts/Layout.astro`).

## Configuration

- `astro.config.mjs` — `site` and `base` (must match the GitHub Pages URL).
- `src/pages/index.astro` — feature sections and screenshot mapping.
- `src/styles/global.css` — color palette and typography.
