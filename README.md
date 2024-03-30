# @tiwariav/eslint-config

The config extends recommended configs from:

Supporting flat config

- eslint-config-prettier
- eslint-config-react-app
- eslint-plugin-css-modules
- eslint-plugin-etc
- eslint-plugin-formatjs
- eslint-plugin-jest
- eslint-plugin-perfectionist
- eslint-plugin-react
- eslint-plugin-testing-library
- eslint-plugin-unicorn
- eslint-plugin-unused-imports

Not supporting flat config

- eslint-plugin-compat
- eslint-plugin-eslint-comments
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-lodash
- eslint-plugin-react-hooks
- eslint-plugin-sonarjs
- eslint-plugin-storybook

## Flat config

The file `flatConfig.cjs` is a commonjs module because of an issue with vscode-eslint
<https://github.com/microsoft/vscode-eslint/issues/1620>
