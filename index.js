var jade = require('react-jade')
  , path = require('path')
  , loaderUtils = require("loader-utils");

module.exports = function(source){
  this.cacheable && this.cacheable();
  var filepath = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  var transformed = jade.compile(source, {filename: filepath});
  return 'var React = require(\'react\');\nmodule.exports= ' + transformed.toString();
}