var http = require('http');
var bl = require('bl');

var urls = process.argv.splice(2);
var results = [];

for(var j=0; j<urls.length; ++j) {
  (function(n) {
    http.get(urls[j], function(res){
      res.pipe(
        bl(function(err,data){
          if(err) 
            return console.error;

          results[n] = data.toString();

          if(results.length === urls.length)
            for(var j=0; j<results.length; ++j)
              console.log(results[j]);
        })
      );
    }).on('error', console.error);
  })(j);
}