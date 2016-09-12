var http = require('http');
var url = require('url');

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
}

function unixtime(time) {
  return {
    unixtime: time.getTime(),
  }
}

http.createServer(function(req, res){
  var parsed = url.parse(req.url, true);
  var isotime = new Date(parsed.query.iso);

  var result;

  switch(parsed.pathname) {
    case '/api/parsetime':
      result = parseTime(isotime);
    break;

    case '/api/unixtime':
      result = unixtime(isotime);
    break;
  }

  if(result) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(+process.argv[2]);