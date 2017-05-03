const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'src/app');

const cssLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
});

const config = {
  entry: [
    'whatwg-fetch',
    `${APP_DIR}/index.jsx`,
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: cssLoader,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};

module.exports = config;
