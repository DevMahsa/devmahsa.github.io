const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    post1: './src/post1/index.js',
    post2: './src/post2/index.js'
  },
  output: {
    filename: '[name]/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'post1/index.html',
      template: './src/post1/index.html',
      chunks: ['post1']
    }),
    new HtmlWebpackPlugin({
      filename: 'post2/index.html',
      template: './src/post2/index.html',
      chunks: ['post2']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: []
    })
  ]
};