var express=require('express')
var app=express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/'+"index.html")
})
app.get('/process_get',(req,res)=>{
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    }
    console.log(response)
    if(req.query.first_name=='chinmay' && req.query.last_name=='gumgaonkar'){
        console.log("valid User")
        res.end('Valid User')
    }
    else{
        console.log("invalid User")
        res.end("Invalid User")
    }
})

var server=app.listen(8001,()=>{
    var host =server.address().address
    var port = server.address().port
    console.log("Example app is listening at http://%s:%s",host,port)
})