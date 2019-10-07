# stylelint-config-lukkien

[![NPM version](http://img.shields.io/npm/v/stylelint-config-lukkien-scss.svg)](https://www.npmjs.org/package/stylelint-config-lukkien-scss)

Our base Configuration rules to ensure your SCSS code is compliant with Lukkien code style.

## Installation

```console
npm install --save-dev stylelint stylelint-scss stylelint-config-lukkien stylelint-config-lukkien-scss
```

or

```console
yarn install --dev stylelint stylelint-scss stylelint-config-lukkien stylelint-config-lukkien-scss
```

## Usage

Set your stylelint config to:

```json
{
  "plugins": [
    "stylelint-config-lukkien-scss"
  ]
}
```

### Extending the config

Simply add a `"plugins"` key to your config and add your overrides there.

For example:

```json
{
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true
  }
}
```
