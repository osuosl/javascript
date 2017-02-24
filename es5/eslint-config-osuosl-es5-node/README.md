# eslint-config-osuosl-es5-node

This package provides OSU Open Source Lab's .eslintrc files as extensible, open
source, shared configs. This package is designed for ECMAScript 5.1, for use in
Node.js. For use with browsers, see `eslint-config-osuosl-es5`.

## Usage

The default export contains all base ESLint rules, not including ECMAScript 6.
It requires `eslint`.

1. `npm install --save-dev eslint eslint-config-osuosl-es5-node`
2. Add `extends: 'osuosl-es5-node'` to your .eslintrc
