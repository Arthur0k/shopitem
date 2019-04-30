# 移动App

## 1.目录结构

    mobileApp
    ├── components
    ├── dist
    │   └── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.html
    ├── README.md
    ├── README.md.temp
    ├── src
    │   ├── App.vue
    │   ├── css
    │   ├── img
    │   ├── js
    │   ├── main.js
    │   └── router.js
    └── webpack.config.js


## 2.配置

### webpack.config.js

   - 添加入口文件和输出文件
   - 配置插件
   - 添加文件匹配规则及相应的loader


 *example*
   ```javascript
   const path = require('path')
   const VueLoaderPlugin = require('vue-loader/lib/plugin')

   modules.exports = {
     entry: './src/main.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist')
     },
     plugins: [
       new VueLoaderPlugin()
     ],
     module: {
       rules: [
       ]
     },
   }
   ```

### gitignore

   ```
   .gitignore
   .DS_Store
   node_modules/
   npm-debug.log
   package-lock.json
   .idea/
   ```


## 3.Vue框架

    header+main+footer


问题1:跳转的路由总是在#后面 即hash mode

解决:
 ```javascript
 export default router = new VueRouter({
     mode: 'history',
     routes: [
     {path: '/..', component: foo}
    ]
    })
```
plugins: [
  // EntryTarget
  '@babel/plugin-transform-classes',

  // [EntryTarget, EntryOptions]
  ['@babel/plugin-transform-arrow-functions', { spec: true }],

  // [EntryTarget, EntryOptions, string]
  ['@babel/plugin-transform-for-of', { loose: true }, "some-name"],

  // ConfigItem
  babel.createConfigItem(require("@babel/plugin-transform-spread")),
],
