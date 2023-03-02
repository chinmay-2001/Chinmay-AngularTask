const { ObjectId } = require('mongodb')
var mongoose=require('mongoose')
const empSchema= mongoose.Schema({
    // "_id":Number,
    "empName":String,
    "empPhoneNo":Number,
    "empEmail":String
},{
    timestamps:true
})

module.exports=mongoose.model('Emp',empSchema)

