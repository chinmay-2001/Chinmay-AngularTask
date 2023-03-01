var express=require('express')
var routes=require('./Routes/routes')
var bodyparse=require('body-parser')
app=express()
var mongoose=require('mongoose')

var dburl=require('./config/congfig')

app.use(bodyparse.urlencoded({extended:true}))
app.use(bodyparse.json())
app.use('/api',routes)

mongoose.Promise=global.Promise

mongoose.connect(dburl.url,{useNewUrlParser:true})
.then(()=>{
    console.log("successfully conncected to the mongodb Atlas")
})
.catch((e)=>{
    console.log("Error:"+e)
})

app.listen(3000,()=>{
    console.log("Successfully conncected to the server")
})

