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

The file `flatConfig.js` is under progress untill all, or most of the included
plugins export a flat config. Then we won't need the package `@rushstack/eslint-patch/modern-module-resolution` to include the dependencies without
installing in consuming application again as peer dependencies. This patch only works when used with the rc config.
