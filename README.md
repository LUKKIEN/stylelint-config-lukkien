# stylelint-config-lukkien

[![NPM version](http://img.shields.io/npm/v/stylelint-config-lukkien.svg)](https://www.npmjs.org/package/stylelint-config-lukkien)
[![License](https://img.shields.io/npm/l/stylelint-config-lukkien.svg)](https://www.npmjs.com/package/stylelint-config-lukkien)
[![Build Status](https://travis-ci.org/LUKKIEN/stylelint-config-lukkien.svg)](https://travis-ci.org/LUKKIEN/stylelint-config-lukkien)

Configuration rules to ensure your CSS code is compliant with Lukkien code style.

## Installation

```console
$ npm install stylelint-config-lukkien
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-lukkien"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:

```json
{
  "extends": "stylelint-config-lukkien",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [License](LICENSE)
