var mongoose=require('mongoose')
const empSchema= mongoose.Schema({
    "empName":String,
    "address":{
        "doorNo":String,
        "lane":String,
        "pincode":Number
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Emp',empSchema)

