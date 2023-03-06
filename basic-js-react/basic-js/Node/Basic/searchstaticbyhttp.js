const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    // const readStream = fs.createReadStream('./static/index.html')
    // //write header for response is let the client know what kind of data server using
    // //200 mean request is ok, next one is header with text-html as content type
    // res.writeHead(200,{'Content-type' : 'text/html'})
    // //pipe the readStream to user (response)
    // readStream.pipe(res);

    // const readStream = fs.createReadStream('./static/example.json')
    // res.writeHead(200,{'Content-type' : 'application/json'})
    // readStream.pipe(res);

    const readStream = fs.createReadStream('./static/example.png')
    res.writeHead(200,{'Content-type' : 'image/png'})
    readStream.pipe(res);
}).listen('3000');