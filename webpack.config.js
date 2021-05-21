const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
              b: true,
              data: {
                data: require('./src/public/data/data.json'),
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|gif|otf|png|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          outputPath: './images',
        },
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    }),
    new CopyWebpackPlugin({
        patterns: [
          { from: 'src/public/images', to: './images' },
        ],
      }
    ),
  ],
}