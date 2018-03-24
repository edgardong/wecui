// 本文件主要目的就是将组件库中所有组件相关的文件打包到一起并输出 lib/vui.js 主文件
'use strict'
const webpack = require('webpack')
const config = require('./webpack.base.conf')
// 修改入口文件
config.entry = {
  'wui': './src/index.js'
}
// 修改输出目录
config.output = {
  filename: './lib/[name].js',
  library: 'wui',
  libraryTarget: 'umd'
}
// 配置externals选项
config.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}
// 配置plugins选项
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': require('../config/prod.env')
  })
]
// 删除devtool配置
delete config.devtool

module.exports = config