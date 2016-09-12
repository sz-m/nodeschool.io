var http = require('http');

http.get(process.argv[2], function(response){
  var dt = '';

  response.setEncoding('utf8');

  response.on('data', function(data){
    dt += data;
  });

  response.on('error', console.error);

  response.on('end', function(){
    console.log(dt.length);
    console.log(dt);
  });
}).on('error', console.error);