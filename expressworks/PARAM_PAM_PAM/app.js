var express = require('express');

var app = express();

function crypto(id) {
  return require('crypto')
          .createHash('sha1')
          .update(new Date().toDateString() + id)
          .digest('hex');
}

app.put('/message/:id', function(req, res){
  res.end(crypto(req.params.id));
});

app.listen(process.argv[2]);