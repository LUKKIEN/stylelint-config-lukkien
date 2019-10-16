# stylelint-config-lukkien

[![License](https://img.shields.io/npm/l/stylelint-config-lukkien.svg)](https://www.npmjs.com/package/stylelint-config-lukkien)
[![Build Status](https://travis-ci.org/LUKKIEN/stylelint-config-lukkien.svg)](https://travis-ci.org/LUKKIEN/stylelint-config-lukkien)
[![devDependencies Status](https://david-dm.org/LUKKIEN/stylelint-config-lukkien/dev-status.svg)](https://david-dm.org/LUKKIEN/stylelint-config-lukkien?type=dev)

Our package provides an extensible shared config according to the guidelines at Lukkien.

This repository contains the following packages:

* `stylelint-config-lukkien` - default guidelines for CSS and basic SCSS usage.
* `stylelint-config-lukkien-scss` - additional guidelines for SCSS usage.

Our base configuration is available within `stylelint-config-lukkien`, whereas our more specific SCSS configuration for SASS is available within `stylelint-config-lukkien-scss`. When only using the base configuraton (for eg. when SASS isn't a part of the tooling) it requires `stylelint`. Our additional SCSS configuration will also require `stylelint-scss` to be installed into your dependencies.

## Usage

### stylelint-config-lukkien

* Run `yarn add --dev stylelint stylelint-config-lukkien`
* Add the following to your `.stylelintrc`:

```
{
  "extends": ["stylelint-config-lukkien"]
}
```

### stylelint-config-lukkien-scss

* Run `yarn add --dev stylelint stylelint-scss stylelint-config-lukkien stylelint-config-lukkien-scss`.
* Add the following to your `.stylelintrc`:

```
{
  "extends": ["stylelint-config-lukkien", "stylelint-config-lukkien-scss"],
  "plugins": ["stylelint-scss"]
}
```

## Setup

### Prerequisites

* [Yarn](https://yarnpkg.com/en/docs/install)
* [Node version manager](https://github.com/nvm-sh/nvm)

### Install

* Git clone the project
* Run `nvm install` to make sure you are using the best Node version for development.
* Run `yarn install` for the first time to enable Lerna in your environment.
* Run `lerna bootstrap` from this point to install this project and its packages subdependencies.
* Make sure your editor is configured to use [.editorconfig](https://editorconfig.org/).

*Note: Lerna is configured to use yarn*

### Development

* Run `nvm use` to set Node to the correct version
* Run tests via `lerna run lint`

## [License](LICENSE)
