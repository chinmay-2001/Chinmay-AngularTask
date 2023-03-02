const mongoose =require('mongoose')


const customer=new mongoose.Schema({
        "name":String,
        "age":Number,
        "gender":String,
    })


module.exports=mongoose.model('Customer',customer)