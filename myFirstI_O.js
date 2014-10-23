var fs = require('fs');
var bufferFile = fs.readFileSync(process.argv[2]);
var text = bufferFile.toString();
console.log(text.split('\n').length - 1);


