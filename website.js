const http =require('http');
const fs =require('fs');

const port=process.env.PORT||99;

const server =http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url=='/')
    {
        res.statusCode=200;
        res.end('<h1>this is codewithharry</h1><p>this a way to rock the world</p>')
    }
    else if(req.url=='/about')
    {
        res.statusCode=200;
        res.end('<h1>this is about codewithharry</h1><p>this about the  way to rock the world</p>')
    }
    else if(req.url=='/bootstrap')
    {
        res.statusCode=200;
        const data=fs.readFileSync('website.html')
        res.end(data.toString())
    }
    else{
        res.statusCode=404;
        res.end('<h1>this is error page</h1>')
    }
})

server.listen(port,()=>{

    console.log(`server is listening on port ${port}`)
})