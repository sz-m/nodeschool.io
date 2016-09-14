var express = require('express');
var fs = require('fs');


fs.readFile(process.argv[3], function(err, data){
  if(err) 
    console.error;

  var app = express();

  app.get('/books', function(req, res){
    res.json(JSON.parse(data));
  });

  app.listen(process.argv[2]);
});

