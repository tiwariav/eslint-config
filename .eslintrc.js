// eslint does not support esm format yet

const config = require("./index.js");

module.exports = {
  ...config,
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    ...config.rules,
    "unicorn/prefer-module": "off",
  },
};
