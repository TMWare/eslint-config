module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'no-console': 1,
    // "no-unused-vars": 0,
    curly: [2, 'multi-line'],
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'no-await-in-loop': 1,
    'no-extra-parens': 1,
    'block-scoped-var': 2,
    // "class-methods-use-this": 1,
    'no-mixed-spaces-and-tabs': 2,
    'array-bracket-newline': [2, { multiline: true }],
    'no-void': [2, { allowAsStatement: true }],
    'require-await': 0,
    'eol-last': [2, 'always'],
    'linebreak-style': [2, 'unix'],
    indent: [2, 2]
  }
}
