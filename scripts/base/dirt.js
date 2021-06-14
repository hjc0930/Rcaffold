const path = require('path');

const root = path.resolve(__dirname, '../../');
// 判断是否处于开发环境
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  root,
  src: path.resolve(root, './src'),
  dist: path.resolve(root, './dist'),
  public: path.resolve(root, './public'),
  isDev,
}