module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/first': 'off',
    'import/order': 'off',
    ident: 'off',
    'no-new': 'off',
    'no-tabs': 'off',
    semi: ['error', 'always'],
    'vue/order-in-components': 'on'
  }
}
