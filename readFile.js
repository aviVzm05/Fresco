const fs = require('fs');

fs.readFile('./temp/sample.txt',function(err,data){
  if (err) throw err;
  console.log(data.toString());
});

