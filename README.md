# stylelint-config-starstuff

[![npm](https://img.shields.io/npm/v/stylelint-config-starstuff)](https://www.npmjs.com/package/stylelint-config-starstuff)
[![npm](https://img.shields.io/npm/dw/stylelint-config-starstuff)](https://www.npmjs.com/package/stylelint-config-starstuff)
[![Codecov](https://img.shields.io/codecov/c/github/keplersj/stylelint-config-starstuff)](https://app.codecov.io/gh/keplersj/stylelint-config-starstuff)
[![Bundle Size](https://img.shields.io/bundlephobia/min/stylelint-config-starstuff)](https://bundlephobia.com/package/stylelint-config-starstuff)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)

Opininated, but simple, shareable Stylelint config

## Philosophy

This config is built with the assumption that you're going to be using [Prettier](https://prettier.io/) across your project, and want stylelint to provide style specific advice and respect Prettier's formatting. This config aims to share this in a simple, shareable config.

## Installation

```shell
npm install --save-dev stylelint stylelint-config-starstuff
```

## Usage

In your `package.json`

```json
{
  "stylelint": {
    "extends": ["stylelint-config-starstuff"]
  }
}
```

### CSS-in-JS (emotion, styled-components, etc.) varient

This config exports a varient specialized for projects using a CSS-in-JS library. To use it, set the following in your `package.json`:

```json
{
  "stylelint": {
    "extends": ["stylelint-config-starstuff/css-in-js"]
  }
}
```

## License

Copyright [Kepler Sticka-Jones](https://keplersj.com) 2019-2022. Licensed ISC
