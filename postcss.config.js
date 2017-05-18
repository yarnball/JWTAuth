module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
  },
  env: {
    production: {
      cssnano: { autoprefixer: false },
    },
  },
};
