const path = require('path');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

let devToolType;

if (process.env.environment === 'dist') {
  devToolType = 'source-map';
} else {
  devToolType = 'eval-source-map';
}

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js'),
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
      },
    ],
  },
  devtool: devToolType,
  plugins: [
    new UnminifiedWebpackPlugin(),
  ],
};
