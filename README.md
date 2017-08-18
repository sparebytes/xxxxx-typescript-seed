# Typescript Seed Package

## Features

- VSCode Settings
- Typescript 2.4
- Jest Tests
- Linter
- Typescript Formatter

## Scripts

  - Build `npm run build`
  - Build and Watch `npm run build:watch`
  - Linting `npm run lint`
  - Typescript Formatting `npm run code-format`
  - Run Tests `npm run build && npm run test`
  - Run Tests and Watch `npm run test:watch` (assumes code is compiled in a separate process)

## Structure

- src
  - __tests__
  - lib

Generated javascript, mapping, and declaration files are placed side-by-side with source files to make debugging and developing from other code-bases easier.
