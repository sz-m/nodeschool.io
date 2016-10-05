var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var person = {
  firstName: process.argv[2],
  lastName: process.argv[3]
};

mongo.connect(url, function(err, db){
  if(err) throw err;

  var docs = db.collection('docs');

  docs.insert(person, function(err, data){
    if(err) throw err;

    console.log(JSON.stringify(person));

    db.close();  
  });
});