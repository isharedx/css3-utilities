'use strict'
const baseWebpackConfig = require('./webpack.base.conf')

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist', // path.resolve(__dirname, '../dist'),
        hot: true,
        // inline: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 更容易查看(patch)的依赖
        new webpack.HotModuleReplacementPlugin(), // 替换插件
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('development')
        })
    ],
});

module.exports = devWebpackConfig