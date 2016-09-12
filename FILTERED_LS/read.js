var fs = require('fs');

var dirname = process.argv[2];
var extension = '.'+process.argv[3];

fs.readdir(dirname, function(err, data){
  if(err) throw err;

  data = data.filter(function(e){
    return e.endsWith(extension);
  });

  for(var j=0; j<data.length; ++j)
    console.log(data[j]);
});