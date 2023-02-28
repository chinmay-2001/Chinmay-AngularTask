var express=require('express')
var app=express()
var bodyParser=require('body-parser')
const routes=require('./router/router');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',routes)
app.listen(3000)
console.log("Restful API server started on: 3000")



