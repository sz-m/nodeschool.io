var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if(err) 
    console.error;

  var parrots = db.collection('parrots');

  parrots.find(
    {
      age: {$gt: +process.argv[2]}
    }
  ).toArray(function(err, documents) {
    if(err)
      console.error;

    console.log(documents);

    db.close();
  });
});