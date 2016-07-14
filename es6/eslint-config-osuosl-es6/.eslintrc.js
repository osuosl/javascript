'use strict';

module.exports = {
  extends: [
    './rules/best-practice.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/style.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    jquery: true,
  },
  rules: {
    strict: ['error', 'global'],
  }
};
