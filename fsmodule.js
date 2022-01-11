const fs = require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//         console.log(err,data); 
// })
// console.log(fs.readFileSync('file.txt').toString());

// fs.writeFile('file2.txt','This is a data',()=>{
//     console.log('Written in the file');
// });
console.log(fs.writeFileSync('file3.txt','This is a new data'));
console.log('Finished reading file');
