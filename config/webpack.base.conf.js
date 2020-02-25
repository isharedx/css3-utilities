'use strict'
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    // context: path.resolve(__dirname, '../'),
    entry: {
        site: './src/index.js',
    },
    output: {
        filename: '[name]/css3-utils.css',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        noParse: /jquery|lodash/,
        rules: [{
                test: /\.html$/,
                // use: ['file-loader?name=[path][name].[ext]!extract-loader!html-loader']
                use: ['html-loader']

            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 加快编译速度，不包含node_modules文件夹内容
                use: [{
                    loader: 'babel-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                            ]
                        }
                    }, {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                            ]
                        }
                    }, {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|gif|jpe?g|ico)$/i,
                use: [{
                    loader: 'url-loader', // 根据图片大小，把图片优化成base64
                    options: {
                        esModule: false, // 这里设置为false
                        limit: 10000,
                    }
                }, ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ $: 'jquery' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'assets/css/[name].css', chunkFilename: '[id].css' }),
        new FixStyleOnlyEntriesPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'), // 默认值： 'index.html'
            template: path.resolve(__dirname, '../src/site/index.html'), // 以模版文件打包html并引入js代码
            showErrors: true, //webpack 编译出现错误
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            },
            inject: true,
            chunks: ['index']
        })
    ],
    target: 'web'
};