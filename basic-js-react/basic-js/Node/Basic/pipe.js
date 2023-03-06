const fs = require('fs');
//module that use for compress file
const zlib = require('zlib');
//module that transfrom stream
const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('./example2.txt',);

// const writeStream = fs.createWriteStream('./example2.txt.gz',);

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
// });
//
// readStream.pipe(writeStream);

// //pipe data to gzip first then manipulate it and compress it that pipe it out to writeStream
// readStream.pipe(gzip).pipe(writeStream);

//after we got .gz file which is zipped file we have to unzipped it
//unzip / uncompress

const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('./example2_unzipped.txt',);
readStream.pipe(gunzip).pipe(writeStream);