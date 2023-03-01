var express=require('express')
const router=express.Router()
const {getEmployee,getSingleEmployee,deleteEmployee,createEmployee,updateEmployee}=require('../Controller/controller')

router.get('/',(req,res)=>{
    res.json("Router running properly")
})
router.get("/empDetail",getEmployee)

router.get('/empDetail/:empId',getSingleEmployee)

router.post('/createEmployee',createEmployee)

router.delete('/deleteEmployee/:empId',deleteEmployee)

router.put('/updateEmployee/:empId',updateEmployee)


module.exports=router


