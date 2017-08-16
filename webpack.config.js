/* global module require __dirname */

const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './dist/js/main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: 'source-map'
};
