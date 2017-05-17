// const postcss: () => {
//     return [
//       /* eslint-disable global-require */
//       require('postcss-cssnext'),
//       /* eslint-enable global-require */
//     ];
//   },
const cssnext = require('postcss-cssnext');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel',
    },
    {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=public/fonts/[name].[ext]'
    },
    { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          // 'postcss-loader',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss?sourceMap&sourceComments',

        ],
      },
    {
    test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass'),
    }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  postcss: () => [cssnext()],
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

// MAKE SURE TO RE-ENABLE UGLIFY for production

    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: { comments: false },
    //   mangle: false,
    //   sourcemap: false,
    //   minimize: true,
    //   mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    // }),
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      allChunks: true,
    }),
  ],
};

module.exports = config;
