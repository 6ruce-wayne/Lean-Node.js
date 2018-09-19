//import { str } from './HelloWorld';
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end(`Hello World 
    This is Node.js
    Testing page server,
    You know who made.!` );
    //res.end(st);
});

server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${port}/');
})