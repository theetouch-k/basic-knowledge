const fs = require('fs');

// //for read as buffer (default)
// const readStream  = fs.createReadStream('./example.txt')
// for read as utf8 encodeing
const readStream  = fs.createReadStream('./example.txt', 'utf8');

const writeStream = fs.createWriteStream('./example2.txt');

// listen to an event : data event
// and get chunk of data in return
readStream.on('data',(chunk)=> {
    console.log(chunk);
    // can write while reading chunks of file
    // (dont need to load all file content to read and write it)
    writeStream.write(chunk);
});