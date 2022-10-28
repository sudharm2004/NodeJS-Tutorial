const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'<application/json'})
    res.write(JSON.stringify())
    res.end();
}).listen(3000);
 console.log('port is running');