const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /('node_modules')/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader:'raw-loader',
          },
          {
            loader: 'pug-bem-plain-loader',
            options: {
              e: '-',
              m: '++',
              data: {
                data: require('./src/public/data/data.json'),
              },
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'npm',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    }),
    new CleanWebpackPlugin(),
  ],
}