var MongoClient=require('mongodb')
var url="mongodb://localhost:27017/chinmay"
const client = new MongoClient(url)

async function main(){
    try{
        await client.connect();
        await listDatabases(client)  
    }
    catch(e){
        console.log(e)
    }
    finally{
        await client.close()
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);




// MongoClien.connect(url,(err,db)=>{
//     if(err) throw err;
    
//     db.createCollection("employee1", (err,res)=>{
//         if(err) throw err;
//         console.log("Colleciton is created")
//         db.close()
//     })
//     console.log("connection is created successfully")
// })