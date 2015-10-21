var webpack = require('webpack');
var pkg = require('./package.json');

module.exports = {
    output: {
        library: 'FormHelpers',
        libraryTarget: 'umd'
    },
    externals: ['jquery', 'underscore', 'handlebars/runtime'],
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
    },
    plugins: [
        new webpack.BannerPlugin([
            '\t' + pkg.name + ' ' + pkg.version,
            '\t' + pkg.author
        ].join('\n'), {entryOnly: true})
    ]
};