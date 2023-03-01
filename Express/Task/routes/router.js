var express=require('express')
var routing=express.Router();

const books=require('../service/service')

routing.get('/getBook',(req,res)=>{
    res.json(books.getbooks())
})

routing.post('/addBook', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
module.exports=routing

