// eslintrc does not support esm format
const config = require("./index.js");

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    "unicorn/prefer-module": "off",
  },
};
