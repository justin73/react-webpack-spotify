const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'app')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // module: {
  //   // loaders: [
  //   //   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
  //   //   { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
  //   // ]
  //   rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
  // },
  module: {
    rules: [
      { test: /\.jsx$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/ },
      { test: /\.js$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}

module.exports = config
