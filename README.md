This is a [Next.js](https://nextjs.org/) site deployed as a static export to Cloudflare Pages.

## Getting started

Use Node.js 22.19.0 and pnpm 10.11.0. `.node-version` selects the Node.js version
for CI and Cloudflare Pages; `.npmrc` makes pnpm use that same version for
project commands. Keep both pins and `engines.node` in `package.json` in sync.

Enable the pinned pnpm version with Corepack (included with Node.js 22):

```bash
corepack enable
corepack prepare pnpm@10.11.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Validation and deployment

```bash
pnpm lint
pnpm build
```

The build writes the static site to `out/`. Cloudflare Pages should use
`pnpm build` as its build command and `out` as its output directory.
`packageManager` in `package.json` pins pnpm for local development and CI.
Commit `pnpm-lock.yaml` when dependencies change; do not generate an npm lockfile.

## End-to-end tests

Build the static export, install the test browsers, and run Playwright:

```bash
pnpm exec playwright install --with-deps
pnpm build
pnpm test
```

Playwright starts a static server for `out/` automatically and tests Chromium,
Firefox, and WebKit. Rebuild after changing the app. Store and share links are
checked without navigating to third-party services. Open the HTML report with
`pnpm test:report`.

To test an existing Cloudflare preview instead of starting the local server:

```bash
PLAYWRIGHT_BASE_URL=https://<deployment-id>.youdotfm.pages.dev pnpm test
```

Use the preview URL for the commit you want to verify. CI tests its own static
export so it does not depend on the timing of a Cloudflare deployment.
