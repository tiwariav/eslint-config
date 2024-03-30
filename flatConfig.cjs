const js = require("@eslint/js");
const prettier = require("eslint-config-prettier");
const craConfig = require("eslint-config-react-app");
const compatPlugin = require('eslint-plugin-compat');
const cssModulesPlugin = require("eslint-plugin-css-modules");
const eslintComments = require('eslint-plugin-eslint-comments');
const formatjsPlugin = require("eslint-plugin-formatjs");
const importPlugin = require('eslint-plugin-import');
const jest = require('eslint-plugin-jest');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const lodashPlugin = require('eslint-plugin-lodash');
const perfectionistNatural = require("eslint-plugin-perfectionist/configs/recommended-natural");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const reactJsx = require('eslint-plugin-react/configs/jsx-runtime.js');
const reactRecommended = require('eslint-plugin-react/configs/recommended.js');
const sonarjsPlugin = require('eslint-plugin-sonarjs');
const storybookPlugin = require('eslint-plugin-storybook');
const unicorn = require("eslint-plugin-unicorn");
const unusedImportsPlugin = require('eslint-plugin-unused-imports');
const globals = require("globals");
const tseslint = require('typescript-eslint');


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
  // enable this config only for ts files
  ...(tseslint.configs.strictTypeChecked.map(config => ({ ...config, files: ["**/*.ts?(x)"] }))),
  ...tseslint.configs.stylisticTypeChecked,
  reactRecommended,
  reactJsx,
  prettier,
  /**
   * following config can be extended when they support flat config:
   * plugin:react-hooks/recommended
   * plugin:eslint-comments/recommended
   */
  perfectionistNatural,
  unicorn.configs["flat/recommended"],
  jest.configs["flat/recommended"],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      compat: compatPlugin,
      "css-modules": cssModulesPlugin,
      "eslint-comments": eslintComments,
      formatjs: formatjsPlugin,
      import: importPlugin,
      lodash: lodashPlugin,
      sonarjs: sonarjsPlugin,
      storybook: storybookPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "react-hooks": reactHooksPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      ...eslintComments.configs.recommended.rules,
      ...compatPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...lodashPlugin.configs.recommended.rules,
      ...sonarjsPlugin.configs.recommended.rules,
      ...storybookPlugin.configs.recommended.rules,
      ...removeKeysStartingWith(craConfig.rules, ["flowtype/"]),
      "no-unused-vars": "off",
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
      'react-hooks/rules-of-hooks': 'error',
      "react-hooks/exhaustive-deps": "error",
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
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error"
    },
    settings,
  },
  {
    files: ["**/*.ts?(x)"],
    rules: {
      ...craConfig.overrides[0].rules,
      "@typescript-eslint/no-unused-vars": "off"
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      }
    },
  },
  {
    files: ["**/*.{cjs,js?(x),mjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
];
