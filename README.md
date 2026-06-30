# ssot-registry.com

Product portfolio website for [ssot-registry.com](https://ssot-registry.com).

This repo owns the public React/Vite site, CI, Namecheap DNS workflow, and self-hosted Docker deployment for the SSOT Registry product portfolio.

## Links

- Site: [ssot-registry.com](https://ssot-registry.com)
- Deploy workflow: [Deploy](https://github.com/groupsum/ssot-registry-com/actions/workflows/deploy.yml)

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run check
```

`npm run check` type-checks and builds the Vite app, then verifies the static discovery files copied into `dist/`.

## Deployment

Production deploys are handled by the `Deploy` GitHub Actions workflow. The workflow builds the Docker image, restarts the `ssot-registry-com` container, validates DNS/proxy desired state, and verifies public HTTPS.

The site is a static Vite build served by nginx from the Docker image. Generated MdWrk content-pack artifacts and Google AI Studio scaffolding are intentionally not part of the production app.
