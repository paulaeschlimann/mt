# Next.js Poke

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It contains server (React Server Components) and client components. Client components share data by using a context.

## Requirements

This prototype was created with Node.js v20.11.1.

## Getting started

- Clone this repository
- Install all required dependencies by `npm install`
- Run project in dev mode by `npm run dev`

## 🚀 Project Structure

Inside the Next.js project, you'll see the following folders and files:

```text
/
├── public/
├── app/
│   ├── components/
│   │   └── cart-button.jsx
│   ├── cart/
│   │   └── page.jsx
│   └── page.jsx
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./next/`          |

## Continuous Integration / Continuous Deployment

This repository is configured for continuous integration and continuous deployment. Commits pushed to the `main` branch are deployed to the production domain available at https://next-poke.mt.paulaeschlimann.com. Commits to non-`main`-branches are deployed to preview domains.