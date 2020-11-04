const path = require('path');

//Base file name
console.log('file name is  -- ',path.basename(__filename));

//Directory name
console.log('dir name is  -- ',path.dirname(__filename));

//File Extension
console.log(' extension name is  -- ',path.extname(__filename));

//Create a path object

console.log('path OBject',path.parse(__filename).base);

//concatenate paths
console.log('Usinf JOin',path.join(__dirname,'test','hello'));