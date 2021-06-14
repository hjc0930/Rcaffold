const style = require('./style');

module.exports = [
  ...style,
  {
    test: /\.(j|t)sx?$/,
    loader: 'babel-loader',
    options: { cacheDirectory: true },
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpe?g|gif|svg|bmp)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 5 * 1000,
          name: '[name].[contenthash:8].[ext]',
          outputPath: 'assets/images',
        },
      },
    ]
  }
]