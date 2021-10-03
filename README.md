```bash
yarn or npm install

## server
yarn dev or npm run dev

## build
yarn build or npm run build
```

# Version

- v1.0.0

  初始化脚手架 目前支持：
  - react
  - react-dom
  - react router(BrowserRouter)
  - typescript
  - css sass scss less
  - css modules
  - image import
- v1.0.1

  - 路由接口约束优化
  - 添加版本说明
- v1.0.2
  - 修改初始的样式文件
- v1.1.0
  - 引入antd组件库
  - 配置 babel-plugin-import 用来组件库的按需加载
  - 修改webpack配置让脚手架支持 history router
- v1.2.0
  - 支持引入全局变量
- v1.2.1
  - 全局变量文件夹命名规则更改为`.greatrc.RUN_ENV` 并将其移动至根目录下
- v1.3.0
  - 修改`tsconfig.json`和`.babelrc`的配置文件，现在jsx的转换方式改为`react-17的react/jsx-runtime`，无需在每个组件中手动引入`react`
  - 移除`sass`、`sass-loader`依赖，默认使用less作为css的预处理器
  - `.babelrc`文件中antd按需加载配置修改
  - 添加生产环境下的全局变量文件