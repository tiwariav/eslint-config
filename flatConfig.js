const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const craConfig = require("eslint-config-react-app");
const formatjs = require("eslint-plugin-formatjs");
const perfectionistNatural = require("eslint-plugin-perfectionist/configs/recommended-natural");
const unicorn = require("eslint-plugin-unicorn");
const globals = require("globals");
const rcConfig = require("./rcConfig.js");

const rcCompat = new FlatCompat();

function removeKeysStartingWith(object, prefixes) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !key.startsWith(prefixes)),
  );
}

const settings = {
  lintAllEsApis: true,
  react: {
    version: "detect",
  },
};

module.exports = [
  js.configs.recommended,
  ...rcCompat.config(rcConfig),
  perfectionistNatural,
  unicorn.configs["flat/recommended"],
  {
    files: ["**/*.{cjs,js?(x),mjs,ts?(x)}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      formatjs,
    },
    rules: {
      ...removeKeysStartingWith(craConfig.rules, ["flowtype/"]),
      "css-modules/no-undef-class": ["error", { camelCase: true }],
      "css-modules/no-unused-class": ["error", { camelCase: true }],
      "eslint-comments/disable-enable-pair": [
        "error",
        { allowWholeFile: true },
      ],
      "import/no-unresolved": "off",
      "lodash/import-scope": ["error", "member"],
      "lodash/prefer-lodash-method": "off",
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react/prop-types": "off",
      "sonarjs/cognitive-complexity": "warn",
      "unicorn/filename-case": [
        "warn",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/no-null": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            arg: { argument: false },
            args: { arguments: false },
            dev: { development: false },
            env: { environment: false },
            envs: { environments: false },
            param: { parameter: false },
            params: { parameters: false },
            prop: { property: false },
            props: { properties: false },
            ref: { reference: false },
            refs: { references: false },
            temp: { temporary: false },
            tmp: { temp: true },
          },
        },
      ],
    },
    settings,
  },
  {
    files: ["**/*.ts?(x)"],
    rules: craConfig.overrides[0].rules,
  },
];
