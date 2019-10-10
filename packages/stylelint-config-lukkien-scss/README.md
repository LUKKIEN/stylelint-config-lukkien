# stylelint-config-lukkien-scss

[![NPM version](http://img.shields.io/npm/v/stylelint-config-lukkien-scss.svg)](https://www.npmjs.org/package/stylelint-config-lukkien-scss)

Our base Configuration rules to ensure your SCSS code is compliant with Lukkien code style.
This configuration can be used on top of the stylelint-lukkien-config package in order to be SCSS compliant.

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
  "extends": [
    "stylelint-config-lukkien",
    "stylelint-config-lukkien-scss"
  ],
  "plugins": [
    "stylelint-scss"
  ],
}
```

### Extending the config

Simply add a `"plugins"` key to your config and add your overrides there.

For example:

```json
{
  "extends": [
    "stylelint-config-lukkien",
    "stylelint-config-lukkien-scss"
  ],
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "scss/dollar-variable-pattern": "^foo",
    "scss/selector-no-redundant-nesting-selector": true
  }
}
```
