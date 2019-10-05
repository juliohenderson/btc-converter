module.exports = {
  env: {
    browser: false,
    es6: true,
    mocha: true,
  },
  extends: ['airbnb', 'plugin:mocha/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'mocha',
    'chai-friendly',
  ],
  rules: {
  },
};
