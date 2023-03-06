const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('About page')
    }
    else res.end (`
    <h1>Oops!</h1>
    <p>Cant find the page</p>
    <a href="/"> Back Home </a>
    `)
})
server.listen(5000);