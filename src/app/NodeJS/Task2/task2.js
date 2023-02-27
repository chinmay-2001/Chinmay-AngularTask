var fs=require('fs')

 fd=fs.openSync("directory",'r');
 if(fs.fstatSync(fd).isDirectory){
    console.log("It is a Directory")
    fs.readdir("directory",(err,files)=>{
        console.log("directory")
        files.forEach(file=>{
            console.log("-->"+file)
        })
    })
 }
 else{
    console.log("It is a file")
 }


