# Astro Todo

This project is based on Astro. It uses components created by the Frontend frameworks React (file ending `.jsx`) and Vue (file ending `.vue`). These components are included in Astro pages and enabled as Islands. These Islands provide interactivity to the users. State across components is shared by `nanostores`.

## Requirements

This prototype was created with Node.js v20.11.1.

## Getting started

- Clone this repository
- Install all required dependencies by `npm install`
- Run project in dev mode by `npm run dev`

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Continuous Integration / Continuous Deployment

This repository is configured for continuous integration and continuous deployment. Commits pushed to the `main` branch are deployed to the production domain available at https://astro-todo.mt.paulaeschlimann.com/. Commits to non-`main`-branches are deployed to preview domains.