const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|jpg|png|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '/'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    port: 3000,
    contentBase: path.resolve(__dirname, './'),
    hot: true,
    historyApiFallback: true,
  },
};
