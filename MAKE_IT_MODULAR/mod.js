var fs = require('fs');
var path = require('path');

module.exports = function(dirname, extension, callback) {
  extension = '.'+extension;

  fs.readdir(dirname, function(err, data){
    if(err) 
      return callback(err);

    data = data.filter(function(e){
      return e.endsWith(extension);
    });

    callback(null, data);
  });
}