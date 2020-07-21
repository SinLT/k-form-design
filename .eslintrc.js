module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off"
  }
}
