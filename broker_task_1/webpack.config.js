var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

//top of file


module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
            // {
            //     test: /\.html$/,
            //     loaders: 'file-loader!html-loader'
            // },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            // },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            // },
            // {
            //     test: /\.css$/,
            //     loaders: [ 'style-loader', 'css-loader' ]
            // }
        ],
    },
    plugins: [
        //new ExtractTextPlugin("src/css/style.css")
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json']
    },
    devServer: { inline: true,
                 headers: { "Access-Control-Allow-Origin": "*" }
     },
};