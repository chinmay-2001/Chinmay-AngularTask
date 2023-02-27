var fs=require('fs');

fs.appendFile('input.txt',"Chennai-Hyderabad-pune",(err)=>{
    if (err) throw err;
    console.log("saved!") 
})

//delete a file

fs.unlink('input.txto',function(err){
    if(err) throw err;
    console.log("file deleted")
})