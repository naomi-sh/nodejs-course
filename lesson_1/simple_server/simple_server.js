// import http
const http=require('http');

// create server
const server=http.createServer((request,response)=>{
response.end('hello world');
});

// create default response

// start the server
const port=3000;
server.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
});