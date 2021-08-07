const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const dirt = require('./dirt');

// 全局变量
const definePlugin = Object.entries(require(`${dirt.src}/global.${process.env.RUN_ENV}`))
  .reduce((result, [key, value]) => ({
    ...result,
    [key]: JSON.stringify(value),
  }), {});

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
  new DefinePlugin({ ...definePlugin }),
];
