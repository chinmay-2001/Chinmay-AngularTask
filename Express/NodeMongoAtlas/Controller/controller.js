const { ObjectId } = require("mongodb")
const { model } = require("mongoose")
const Emp =require('../Model/model.js')


const getEmployee=(req,res)=>{
    Emp.find()
    .then(data=>{
        console.log("Inside then")
        res.send(data)
    })
    .catch(err=>{
       console.log(err)
       console.log("Inside catch")
    })
}

const createEmployee=(req,res)=>{
    
    Emp.create({
                empName:req.body.empName,
                empPhoneNo:req.body.phoneNo,
                empEmail:req.body.email
              })
                .then(data=>{
                    res.send(data)
                })
                .catch(err=>{
                    console.log(err)
                })

}

const getSingleEmployee=(req,res)=>{
    Emp.findById(req.params.empId)
    .then(note=>{
        if(!note){
            return res.status(404).send({
                message:"Note not found with Id" + req.params.empId
            })
        }
        res.send(note)
    })
    .catch(err=>{
        console.log(err)
    })
}

const deleteEmployee=(req,res)=>{
    Emp.findByIdAndRemove(req.params.empId)
    .then(data=>{
        console.log("here")
        res.send(data);
    })
    .catch(err=>{
        console.log(err)
    })
}

const updateEmployee=(req,res)=>{
    console.log("inside update Employee")
    console.log("empName:",req.params.empId)
    Emp.findByIdAndUpdate(req.params.empId,{
        $set:{empName:req.body.empName,empPhoneNo:req.body.phoneNo,empEmail:req.body.email}    
        // $set:{empName:req.body.empName}
    },{new:true})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports={getEmployee,getSingleEmployee,createEmployee,deleteEmployee,updateEmployee}