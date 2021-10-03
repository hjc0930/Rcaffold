const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dirt = require('./dirt');

const loader = dirt.isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = [
  {
    test: /\.css$/,
    use: [loader, 'css-loader']
  },
  {
    test: /\.less$/,
    use: [
      loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: true,
          modules: {
            localIdentName: '[local]__[name]-[hash:base64:4]'
          }
        }
      },
      'less-loader'
    ]
  },
  {
    test: /\.(sa|sc)ss$/,
    use: [
      loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: true,
          modules: {
            localIdentName: '[local]__[name]-[hash:base64:4]'
          }
        }
      },
      'sass-loader'
    ]
  },
];