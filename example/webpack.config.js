var webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            'handlebars/runtime': 'handlebars/dist/handlebars'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ]
    },
    jshint: {
        failOnHint: true
    }
};