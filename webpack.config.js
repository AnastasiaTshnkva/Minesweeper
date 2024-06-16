const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: minesweeper_bunle.js,
  },
  module: {
    rules: [
      {
        test: /.txt$/, 
        use: 'raw-loader'
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {loader: 'file-loader'},
          ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader',],
      }
    ,
    {
      test: /\.(js|jsx)$/,
      use: 'bable-loader',
    },
  ],
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html'})
    ]
  }
};