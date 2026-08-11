# devrimcaner.com

A static portfolio built with the Next.js Pages Router, TypeScript, and Joy UI. It uses `output: 'export'`, so the production result is plain HTML, CSS, JavaScript, and static assets—no backend, API routes, database, or server runtime is required.

## Requirements

- Node.js 22 or later
- npm 10 or later

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npm audit --omit=dev
```

`npm run build` validates TypeScript and creates the deployable static site in `out/`.

GitHub Actions runs the production dependency audit, lint, typecheck, and static build for pushes and pull requests.

## Project structure

- `pages/` — Pages Router entry points, document markup, and page metadata.
- `components/` — reusable presentational components.
- `data/data.json` — portfolio content.
- `lib/portfolio.ts` — shared content contract used to type-check `data.json` at build time.
- `lib/site.ts` — canonical site metadata.
- `public/` — static assets, favicon, crawler files, and the custom-domain `CNAME` file.
- `theme/` and `styles/` — Joy UI theme and small global accessibility styles.

## Editing portfolio content

Edit `data/data.json`. Keep every record aligned with the TypeScript contract in `lib/portfolio.ts`:

- Every project and experience entry needs a unique `id`.
- Project and experience `url` values are optional. When provided, they must be public external URLs.
- Experience `description` is an array; each item renders as an accessible list item.
- Keep technology names consistently capitalized.

Run `npm run typecheck` and `npm run build` after content edits. The static import in `pages/index.tsx` ensures invalid content shape fails the build.

## Deployment

`out/` is deployable to any static host. The custom domain is declared in `public/CNAME`, which is copied into the export.

Publishing to production happens automatically: `.github/workflows/deploy.yml` builds this project and publishes `out/` to GitHub Pages via GitHub Actions once `.github/workflows/ci.yml`'s `verify` job succeeds on `master`. No build output is committed to the repository.

Static hosting cannot add application response headers. Configure CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and frame protection in the hosting/CDN configuration.
