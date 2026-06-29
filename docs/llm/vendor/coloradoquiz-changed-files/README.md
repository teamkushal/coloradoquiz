# Colorado Quiz

A small Angular 22 PWA of quizzes and news, deployed to Firebase Hosting at
https://coloradoquiz.web.app.

## Tech stack

- **Angular 22** — standalone components, **signals**, **zoneless** change detection
  (no `zone.js`), the built-in control flow (`@if` / `@for`), and lazy-loaded routes.
- **Angular Material 22** with a Material 3 theme (`mat.theme`).
- **Vitest** + **jsdom** for unit tests (replaces Karma/Jasmine).
- **Playwright** for end-to-end tests (replaces Protractor).
- **@angular/service-worker** for PWA/offline support.

## Prerequisites

- Node.js `^22.22.3 || ^24.15.0 || >=26` (matches the Angular 22 CLI engine range)
- Yarn (classic)

## Commands

```bash
yarn install            # install dependencies
yarn start              # dev server at http://localhost:4200
yarn build              # production build -> public/browser (served by Firebase)
yarn test               # unit tests (Vitest, watch mode)
yarn test:ci            # unit tests once, with coverage
yarn e2e                # end-to-end tests (Playwright)
```

The first time you run e2e on a machine, install the browser once:

```bash
yarn playwright install chromium
```

## Deployment

`firebase.json` serves the build output from `public/browser`. The production
build writes there directly (`outputPath` in `angular.json`), so deployment is:

```bash
yarn build
firebase deploy
```
