var http=require('http');
var dt=require('./myfirstModule')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('This date and time are currently:' + dt.myDateTime()+"\n")
    res.end("Hello World!")
    console.log("hello World")
}).listen(8080);

console.log("server is started")