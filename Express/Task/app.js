var express=require('express')
app=express()

const routes=require('./routes/router')

app.use('/api',routes)

app.listen(3000);
