var merge  = require('webpack-merge');
var common = require('./webpack.config.base.js');

module.exports = merge.smart(common, {
  mode: 'development',

  devServer: {
    contentBase : path.join(__dirname, 'dist'),
    compress    : true,
    port        : 8001,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }

});
