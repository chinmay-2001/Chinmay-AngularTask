const db=require('./db')
const Query={
    hello:()=>{
        return "Welcome to the GraphQl...."
    },
    employee:()=>db.employees.list(),
    companies:()=>db.companies.list(),
}

module.exports={Query}