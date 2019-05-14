const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  // module
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          //   plugins: [
          //     ['@babel/plugin-transform-runtime'],
          //     ['component', { libraryName: 'mint-ui', style: true }],

          //   ],
          // },
        },
      },
      { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, use: 'url-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.(png|jpe?g|svg)$/, use: 'url-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
};
