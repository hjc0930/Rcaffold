const ip = require('ip');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const PORT = 8100;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    stats: 'errors-only', // 终端仅打印 error
    quiet: true,
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: false, // 构建完毕时自动打开默认浏览器
    hot: true, // 热更新
    overlay: true, // 开启浏览器端的错误浮层功能
    historyApiFallback: true, // 支持 history router
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`\r App running at:\n - Local：  \x1B[34mhttp://localhost:${PORT}\x1B[0m\n - Network: \x1B[34mhttp://${ip.address()}:${PORT}\x1B[0m`
        ],
      },
      clearConsole: true,
    })
  ]
})