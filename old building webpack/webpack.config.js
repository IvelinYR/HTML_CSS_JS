const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const sassLoaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
    devtool: "cheap-source-map",
    entry: {
        'app.bundle': [
            './src/index'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },

            {
                test: /\.sass$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loaders: ['file' ,'html-loader'],
                query: {
                    minimize: true
                }
            },

            {
                test: /\.png$/,
                exclude: /node_modules/,
                loaders: [
                    'file-loader?name=/assets/[name].[ext]',
                    'image-webpack'
                ]
            },
        ]
    },imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },
    output: {
        filename: '[name].js',
        path:debug ? path.join(__dirname, './build') : path.join(__dirname, './bin') ,
        publicPath: ''
    },
    plugins: debug ? [
            new ExtractTextPlugin('[name].css'),
            new CopyWebpackPlugin([
                { from: './index.html' },
                { from: './background.png' }
                ])
        ] : [
            new ExtractTextPlugin('[name].css'),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                warnings: false
            } }),
        ],

    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.sass'],
        root: [path.join(__dirname, './src')]
    }
}

module.exports = config