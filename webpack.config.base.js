var path = require('path');

var vueLoader = require('vue-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  mode: 'development',

  entry: path.resolve(__dirname, 'client/src/app.js'),
  output: {
    path      : path.resolve(__dirname, 'dist'),
    filename  : '[name].[hash].bundle.js',
    chunkFilename: '[id].[hash].bundle.js',
    publicPath: "/assets/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
          { loader: 'postcss-loader'}
        ]
      },

      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "client/src")
    ],

    extensions: [".js", ".json", ".vue", ".css"]
  },

  plugins: [
    new vueLoader.VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, "client/src/app.html"),
      filename: 'app.html'
    })
  ]
};