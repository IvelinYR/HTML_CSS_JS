const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const sassLoaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
    devtool: "source-map",
    entry: {
        'app.bundle': ['./src/index']
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
                test: /\.jpg$/,
                exclude: /node_modules/,
                loader: "file-loader"
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html',
                query: {
                    minimize: true
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path:debug ? path.join(__dirname, './build') : path.join(__dirname, './bin') ,
        publicPath: '/build'
    },
    plugins: debug ? [
            new ExtractTextPlugin('[name].css')
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