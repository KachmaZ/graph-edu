module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/typescript',
    'plugin:prettier/recommended',
  ],
};
