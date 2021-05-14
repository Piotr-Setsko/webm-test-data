const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template/index.pug',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
  ],
}