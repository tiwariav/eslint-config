const craConfig = require("eslint-config-react-app");

function removeKeysStartingWith(object, prefixes) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !key.startsWith(prefixes)),
  );
}

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jsx-a11y/recommended",
    "plugin:lodash/recommended",
    "plugin:perfectionist/recommended-natural",
    "plugin:sonarjs/recommended",
    "plugin:storybook/recommended",
    "plugin:unicorn/recommended",
    // react
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    // prettier
    "prettier",
  ],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
      ],
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: craConfig.overrides[0].rules,
    },
  ],
  plugins: ["css-modules", "formatjs", "lodash", "sonarjs"],
  root: true,
  rules: {
    ...removeKeysStartingWith(craConfig.rules, ["flowtype/"]),
    "css-modules/no-undef-class": ["error", { camelCase: true }],
    "css-modules/no-unused-class": ["error", { camelCase: true }],
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "import/no-unresolved": "off",
    "jest/expect-expect": [
      "error",
      {
        "assertFunctionNames": ["expect", "expectResult"],
      }
    ],
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
  settings: {
    lintAllEsApis: true,
    react: {
      version: "detect",
    },
  },
};
