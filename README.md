# @tiwariav/eslint-config

The config extends recommended configs from:

@typescript-eslint/eslint-plugin
eslint
eslint-config-prettier
eslint-config-react-app/jest
eslint-plugin-compat
eslint-plugin-css-modules
eslint-plugin-eslint-comments
eslint-plugin-etc
eslint-plugin-formatjs
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-lodash
eslint-plugin-perfectionist
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-sonarjs
eslint-plugin-storybook
eslint-plugin-unicorn

## Flat config

The file `flatConfig.js` is under progress untill all, or most of the included
plugins export a flat config. Then we won't need the package `@rushstack/eslint-patch/modern-module-resolution` to include the dependencies without
installing in consuming application again as peer dependencies. This patch only works when used with the rc config.
