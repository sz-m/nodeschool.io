var ls = require('./mod');

var dirname = process.argv[2];
var extension = process.argv[3];

var files = ls(dirname, extension, function(err, data){
  if(err) throw err;

  for(var j=0; j<data.length; ++j)
    console.log(data[j]);

});