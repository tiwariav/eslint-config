const config = require("./index.js");

module.exports = {
  ...config,
  extends: [...config.extends, "plugin:@next/next/core-web-vitals"],
};
