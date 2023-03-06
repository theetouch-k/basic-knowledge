const path = require('path')

///return of current file (ps. start form where this file run)
console.log(path.sep)

//for create a file path
const filePath = path.join('/content','subfolder','test.text')
console.log(filePath)

//for get base file name from file path
const base = path.basename(filePath);
console.log(base);

//for absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
//
const absolute2 = path.resolve(__dirname,'content/subfolder/test.txt');
console.log(absolute)