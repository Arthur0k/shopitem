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

### 页面布局结构
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

#### home页面

##### 新闻页

如何分页？点击加载按钮刷新更多新闻list

- 新闻详情页

  发表评论步骤
  + 上传用户id 和当前内容
  + 1.需要获得当前用户名 2.即将发表的内容 3.发表时间 4.第几楼
  + 手动拼接成字符串push到当前commonts-list中 if 用户名隐藏 则匿名发表
  + 重新渲染comments-list
  + 清楚msg
