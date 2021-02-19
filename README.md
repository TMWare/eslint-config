# @tmware/eslint-config [![NPM](https://img.shields.io/npm/v/@tmware/eslint-config.svg)](https://www.npmjs.com/package/@tmware/eslint-config)

ESLint config for my JavaScript projects.

TypeScript configuration has moved to [@tmware/eslint-config-typescript](https://www.npmjs.com/package/@tmware/eslint-config-typescript).

## Installation

```bash
yarn add @tmware/eslint-config eslint --dev
```

```bash
npm i @tmware/eslint-config eslint --save-dev
```

## Usage

To use the ESLint config, add the following to your `.eslintrc`:

```json
{
  "extends": "@tmware/eslint-config"
}
```

Lint script for `package.json`

```json
...
"lint": "eslint --ext .js --ignore-path .gitignore src/"
...
```
