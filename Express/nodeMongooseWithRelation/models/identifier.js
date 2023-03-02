const mongoose=require('mongoose')

const idenfier=mongoose.Schema({
    cardCode:String,
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    }

})

module.exports=mongoose.model('Identifer',idenfier)