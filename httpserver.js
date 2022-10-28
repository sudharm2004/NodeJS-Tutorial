const http =require('http');

const port=process.env.PORT||9999;

const server =http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<h1>this is codewithharry</h1><p>this a way to rock the world</p>')
})

server.listen(port,()=>{

    console.log(`server is listening on port ${port}`)
})