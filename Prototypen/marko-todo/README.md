# Marko Poke

This project is based on Marko. It uses components created by the frameworks Marko only. Marko is based on compiler which decides which component is used on the server and for which JavaScript code must be sent to the browser. State across components is shared by custom events and stored in `localStorage`.
This project showcases the use of Marko for sites that focus on displaying content.

## Requirements

This prototype was created with Node.js v20.11.1.

## Getting started

- Clone this repository
- Install all required dependencies by `npm install`
- Run project in dev mode by `npm run dev`

## 🚀 Project Structure

The Marko project uses directory-based routes.

```text
/
├── src/
│   ├── components/
│   │   └── todo-list.marko
│   └── routes/
│       ├── _index
│       │   └── +page.marko
│       └── second
│           └── +page.marko
└── package.json
```

## 👷🏼 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |                |

## Continuous Integration / Continuous Deployment

This repository is configured for continuous integration and continuous deployment. Commits pushed to the `main` branch are deployed to the production domain available at https://marko-todo.mt.paulaeschlimann.com/. Commits to non-`main`-branches are deployed to preview domains.