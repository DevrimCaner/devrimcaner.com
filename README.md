# devrimcaner.com

Source for [devrimcaner.com](https://devrimcaner.com), deployed to GitHub Pages.

The Next.js project is in [`devrimcaner/`](./devrimcaner); its setup, checks, content model, and deployment instructions are documented in [the project README](./devrimcaner/README.md). [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) lints, typechecks, builds, and audits every push/PR; [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) builds the static export and publishes it to GitHub Pages via GitHub Actions after `ci.yml` succeeds on `main`.
