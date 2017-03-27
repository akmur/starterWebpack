const path = require('path');

module.exports = {
    entry: {
        filename: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.bundle.js'
    },
    module: {
        loaders: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
