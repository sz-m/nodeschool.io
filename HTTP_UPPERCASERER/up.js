var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
  req.pipe(map(function(data){
    return data.toString().toUpperCase()
  })).pipe(res);
}).listen(+process.argv[2]);