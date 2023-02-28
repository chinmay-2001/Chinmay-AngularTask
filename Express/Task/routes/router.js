var express=require('express')
var routing=express.Router();

const books=require('../service/service')

routing.get('/getBook',(req,res)=>{
    res.json(books.getbooks())
})

routing.post('/addBook',(req,res)=>{
    result=books.addbook(JSON.stringify(req.body));
    console.log(req.body)
    if(result){
        res.json('successfully added the movie')
    }
    else{
        res.json("Unsuccessful")
    }
})
module.exports=routing

