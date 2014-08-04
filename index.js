var jade = require('react-jade')
  , path = require('path')
  , loaderUtils = require("loader-utils");

module.exports = function(source){
  
  var transform = "var React = require('react');\n";
  
  this.cacheable && this.cacheable();
  
  var filepath = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  var query = loaderUtils.parseQuery(this.query);
  
  if(query.split){
    var chunks = source.split(/\n*?\/\/ react: (\w+)\s*\n/);
    chunks.shift();
    if(!chunks.length) return single();

    for(var i=0; i < chunks.length-1; i += 2){
      transform += "exports['" + chunks[i] + "'] = " + jade.compile(chunks[i+1], {filename: filepath}).toString() + ";\n";
    }
    return transform;
  }
  
  return single();
  
  function single(){
    return transform + "module.exports= " + jade.compile(source, {filename: filepath}).toString();
  }
  
}