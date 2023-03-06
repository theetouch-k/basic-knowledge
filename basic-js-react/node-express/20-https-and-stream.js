const fs = require('fs');
const http = require('http')

//http.createServer((req,res) => {
//    const text = fs.readFileSync('./content/big.txt', 'utf8')
//    res.end(text)
//}).listen(5000)

//if u inspect network u will see it's content length is 1100000 bytes which is
//too large

http.createServer((req,res) => {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    //when we have access to events,
    fileStream.on('open', ()=> {
        //pipe is reading from the readStream to writeStream
        //since we can read data in chunks we can also write data in chunks and 
        //response object can be set up as a writeable stream
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=> {
        res.end(err)
    })
}).listen(5000)
//u can see in Response Headers in Network that transfer-Encoding: chunked
