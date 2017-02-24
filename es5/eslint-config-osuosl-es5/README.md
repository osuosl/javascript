# eslint-config-osuosl-es5

This package provides OSU Open Source Lab's .eslintrc files as extensible, open
source, shared configs. This package is designed for ECMAScript 5.1, for use in
browsers and similar. For use with Node.js, see `eslint-config-osuosl-es5-node`.

## Usage

The default export contains all base ESLint rules, not including ECMAScript 6
and Node.js. It requires `eslint`.

1. `npm install --save-dev eslint eslint-config-osuosl-es5`
2. Add `extends: 'osuosl-es5'` to your .eslintrc

You can make sure this module lints with itself using `npm run lint`.
