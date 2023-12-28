# Vite + Vue 3 + Typescript + Eslint + Prettier + Vitest Component Library

A [Vite](https://vitejs.dev/) scaffolded project with Vite + Vue 3 + Typescript + Eslint + Prettier + Vitest template extended with some useful tools and includes support for legacy browsers as well as internalization. To scaffold your own based on this template
`npx degit awelters/vue3-component-library vue3-component-library`

## Motivation

The reason this template exists is to make it fast and easy to scaffold new projects and develop the highest quality frontend web user interfaces using the best and fastest build tools, frameworks, and libraries. The goal is to make it easy for individuals, small dev teams, and even large software engineering groups with dev/testers/QA folks to craft scalable applications using modern best practices. The goal is to minimize the number of dependencies while also allowing people to build apps for as many browsers as possible with a global audience in mind. Another goal was to make it easy to collaborate and ensure quality with code style formatting, static typing, static code analysis, unit and browser testing.

## Why Vite?
Long story short, slow start and update times for the serve when developing. Uses native ESM based dev server vs bundle based dev server. Read more about it here: https://vitejs.dev/guide/why.html#why-vite

## Links to some libraries used

- [Vue 3](https://vuejs.org/) for building web user interfaces using an approachable, performant and versatile framework
- [Eslint](https://eslint.org/) with rules for high code quality
- [Prettier](https://prettier.io/) for formatting code in an opinonated way
- [Vitest](https://vitest.dev/) for unit testing

## Install Node Version Manager

### Mac/Linux

https://github.com/nvm-sh/nvm#installing-and-updating

### Windows

https://github.com/coreybutler/nvm-windows/releases

## Use Node 18 LTS (18.19.0 as of 12/28/2023)

```
nvm install
nvm use
```

## Installation Yarn Package Manager (v1)

```
npm install --global yarn
```

## Installation Project Dependencies

```
yarn install
```

## Lint w/ fixing

```
yarn lint
```

## Formate code using Prettier

```
yarn format
```

## Run Unit Tests with coverage (typical use is in CI/CD pipelines)

```
yarn test:unit
```

## Build component library

```
yarn build
```

## Credits

[Ruoyun Wu](https://github.com/wuruoyun) for his [starter component library](https://github.com/wuruoyun/vue-component-lib-starter )
