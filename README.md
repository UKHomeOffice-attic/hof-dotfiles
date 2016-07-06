# HOF Dotfiles [![npm version](https://badge.fury.io/js/hof-dotfiles.svg)](https://badge.fury.io/js/hof) [![Build Status](https://travis-ci.org/UKHomeOffice/hof-dotfiles.svg?branch=master)](https://travis-ci.org/UKHomeOffice/hof-dotfiles)
## Common dotfiles used by HOF in a typical build

Adds the following preconfigured dotfiles to the root of your project on `postinstall`.

- `.dockerignore`
- `.eslintignore`
- `.editorconfig`
- `.eslintrc`
- `.gitignore`
- `.jscsrc`
- `.travis.yml`

It won't overwrite any current dotfiles of the same name so you can safely install without destroying your own config.

If you want to contribute, please follow [the guidelines](./contributing.md)
