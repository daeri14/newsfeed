const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i, // Добавлено правило для PNG, JPG, JPEG, GIF и SVG
      type: 'asset/resource',
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  devServer: {
    open: true,
  }
};