/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript'
  ]
}
