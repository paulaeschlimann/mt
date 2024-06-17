# Thanks for checking out Marko

# Installation

```
npx @marko/create marko-app --template basic
cd marko-app
npm install
npm run dev
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `npm run dev` to start the development server
- Run `npm run build` to build a production-ready node.js server
- Run `npm run preview` to run the production server

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files.  Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).

# Deployment

- `npm run build` produces output in directory `netlify`.
- `netlify deploy` or `netlify deploy --build` deploy app. Depending on configurations set in *netlify.toml*, the publish directory's content gets published to Netlify too.

## Continuous Integration / Continuous Deployment

This repository is configured for continuous integration and continuous deployment. Commits pushed to the `main` branch are deployed to the production domain available at https://marko-poke.mt.paulaeschlimann.com/. Commits to non-`main`-branches are deployed to preview domains.