const path = require('path');
const { dirt, modules, plugins } = require('./base');

module.exports = {
  entry: {
    app: path.resolve(__dirname, dirt.src, './index.tsx')
  },
  output: {
    filename: `js/[name]${dirt.isDev ? '' : '.[hash:8]'}.js`,
    path: path.resolve(dirt.dist),
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', 'jsx', '.json'],
    alias: {
      '@': dirt.src
    }
  },

  module: {
    rules: [...modules]
  },

  plugins: [...plugins]
}