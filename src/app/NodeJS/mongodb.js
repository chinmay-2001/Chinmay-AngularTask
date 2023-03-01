var MongoClient=require('mongodb').MongoClient
var mongoURI="mongodb+srv://chinmay:chinmay2001*@atlascluster.qla0xds.mongodb.net/emp?retryWrites=true&w=majority"
var mongoose=require('mongoose')
// const client = new MongoClient(url)

// async function main(){
//     try{
//         await client.connect();
//         await listDatabases(client)  
//     }
//     catch(e){
//         console.log(e)
//     }
//     finally{
//         await client.close()
//     }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);




// MongoClient.connect(url,(err,db)=>{
//     // if(err) throw err;
    
//     db.createCollection("employee1", (err,res)=>{
//         if(err) throw err;
//         console.log("Colleciton is created")
//         db.close()
//     })
//     console.log("connection is created successfully")
// })
try {
    const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
    // mongoose.connect(process.env.DB, connectionParams);
    mongoose.connect(mongoURI,connectionParams);
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}