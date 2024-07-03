// config-overrides.js
const webpack = require('webpack');
 
module.exports = function override(config, env) {

    config.output.publicPath = '/react/'
  
  return config;
};