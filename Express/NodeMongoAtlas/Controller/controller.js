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
    
    Emp.create({empName:"Aman",
                address:[{doorNo:"105",lane:"PhaseI",pincode:440002}]}).then(data=>{
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
        res.send(data);
    })
    .catch(err=>{
        console.log(err)
    })
}

const updateEmployee=(req,res)=>{
    Emp.findByIdAndUpdate(req.params.empId,{
        empName:req.body.empName    
    },{new:true})
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports={getEmployee,getSingleEmployee,createEmployee,deleteEmployee,updateEmployee}