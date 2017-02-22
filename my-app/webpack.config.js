const debug = process.env.NODE_ENV !== "production";
const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        publicPath: "",
        path: debug ? path.join(__dirname, './build') : path.join(__dirname, './bin')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                        {
                            loader:'babel-loader',
                        }
                ]
            },
            {
                test: /\.css$/,
                 use: ExtractTextPlugin.extract({
                     fallback: "style-loader",
                     use: "css-loader"
                 })
            },
            {
                test: /\.png$/,
                use: "file-loader?name=/assets/[name].[ext]"
            },
            {
                test: /\.jpg$/,
                use: "file-loader?name=/assets/[name].[ext]"
            }

        ]
    },
    plugins: debug ? [
        new ExtractTextPlugin("app.styles.css"),
        new CopyWebpackPlugin([
            { from: './src/index.html' },
            { from: './src/images/background.png' }
        ])
    ] : [
            new ExtractTextPlugin('app.styles.css'),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new CopyWebpackPlugin([
                { from: './src/index.html' },
                { from: './src/images/background.png' }
            ])
        ]
};