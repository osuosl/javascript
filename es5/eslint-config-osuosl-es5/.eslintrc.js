'use strict';

module.exports = {
  extends: [
    './rules/best-practice.js',
    './rules/errors.js',
    './rules/style.js',
    './rules/variables.js',
  ],
  parserOptions: {
    ecmaVersion: 5,
  },
  env: {
    browser: true,
    jquery: true,
  },
  rules: {
    strict: ['error', 'global'],
  }
};
