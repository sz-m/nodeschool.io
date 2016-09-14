var fs = require('fs');

var str = fs.readFileSync(process.argv[2], 'utf8');
var length = str.split('\n').length - 1;

console.log(length);