# eslint-config-osuosl-es6

This package provides OSU Open Source Lab's .eslintrc files as extensible, open
source, shared configs. This package is designed for ECMAScript 6, for use in
browsers and similar. For use with Node.js, see `eslint-config-osuosl-es6-node`.

## Usage

The default export contains all base ESLint rules, including ECMAScript 6 but
not including Node.js. It requires `eslint`.

1. `npm install --save-dev eslint eslint-config-osuosl-es6`
2. Add `extends: 'osuosl-es6'` to your .eslintrc

You can make sure this module lints with itself using `npm run lint`.
