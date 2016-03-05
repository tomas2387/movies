var webpack = require('webpack');

var config = {
    entry: [
        './index.jsx',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server'
    ],
    output: {
        path: __dirname + '/dist/',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                loaders: ['babel'],
                exclude: /node_modules/,
                test: /\.jsx?$/
            }
        ]
    },

    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;