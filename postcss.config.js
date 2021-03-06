module.exports = {
    plugins: [
      require('postcss-import'),
      require('postcss-url'),
      require('postcss-preset-env')({
        browsers: 'last 2 versions',
        stage: 0,
      }),
      require('postcss-inline-svg'),
      require('postcss-svgo'),
      require('postcss-nested'),
      require('autoprefixer'),
      require('cssnano')
    ],
  };
