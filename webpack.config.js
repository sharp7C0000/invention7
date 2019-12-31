var merge  = require('webpack-merge');
var common = require('./webpack.config.base.js');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge.smart(common, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //'style-loader',
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader'}
        ]
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename     : '[name].[hash].bundle.css',
      chunkFilename: '[id].[hash].bundle.css',
    })
  ]
});
