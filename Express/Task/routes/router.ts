var express=require('express')
var routing=express.Router();

const books=require('./service/service')

routing.get('/getBook',()=>{
    books.getbooks()
})

// routing.post('addBook',(bookObj:any)=>{
//     books.addBook(bookObj);
// })
module.exports=routing

