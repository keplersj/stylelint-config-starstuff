# stylelint-config-starstuff

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

Copyright Kepler Sticka-Jones 2019. Licensed ISC
