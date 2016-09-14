let result = 0;
for(let j=2; j<process.argv.length; ++j)
  result += +process.argv[j];

console.log(result);