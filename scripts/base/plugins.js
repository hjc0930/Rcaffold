const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const { HotModuleReplacementPlugin } = require('webpack');
const dirt = require('./dirt');

module.exports = [
  new HtmlWebpackPlugin({
    template: path.resolve(dirt.root, './public/index.html'),
    filename: 'index.html',
    cache: false,
    minify: dirt.isDev ? false : {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      useShortDoctype: true,
    },
  }),
  new WebpackBar(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(dirt.root, './public'),
        to: path.resolve(dirt.root, './dist'),
        toType: 'dir',
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ["**/*.html"],
        },
      }
    ]
  }),
  new HotModuleReplacementPlugin(),
];
