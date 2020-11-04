const fs = require('fs');
const path = require('path');
//create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err)=>{
//     if(err) throw err;
//     console.log('folder Create');
// })

//create and write to a file
fs.writeFile(path.join(__dirname, '/test','hi.js'),`console.log('India');`,err=>{
    if(err) throw err;
    console.log('File written');
});