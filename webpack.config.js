const path = require('path');
const unminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    devtool: 'nosources-source-map',
    plugins: [
        new unminifiedWebpackPlugin()
    ]
};
