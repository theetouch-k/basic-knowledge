const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write('Hello world form nodejs');
//     res.end();
// });

const server = http.createServer((req,res)=>{
    //
    if (req.url === '/') {
        res.write('Hello world form nodejs');
    }
    else {
        res.write('Using from other domain!'); 
    }
    res.end();
});

//listen on port 3000
server.listen('3000');