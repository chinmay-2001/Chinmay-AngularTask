const mongoose=require('mongoose')
const Customer=require('./models/customer')
const identifier = require('./models/identifier')
const Identifer=require("./models/identifier")

mongoose.connect("mongodb+srv://chinmay:chinmay2001*@atlascluster.qla0xds.mongodb.net/Employee?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true  
})
.then(()=>console.log("Successfully connect to MongodDB"))
.catch(err=>console.error("Connection error",err))

const CreateCustomer=function(name,age,gender){
    const customer=new Customer({
        name,age,gender
    })
    return customer.save()
}

const createIdentifer=function(cardCode,customer){
    const identifier=new Identifer({
        cardCode,
        customer
    })
    return identifier.save()
}

CreateCustomer("innouser",29,"male")
.then(customer=>{
    console.log("Create new Customer",customer)
    const customerId=customer._id.toString();
    return createIdentifer(customerId.substring(0,10).toUpperCase(),customerId)
})
.then(identifier=>{
    console.log("Created new Identifer\n",identifier);
})
.catch(err=>console.log(err));