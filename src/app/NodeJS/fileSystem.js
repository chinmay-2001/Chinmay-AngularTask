var fs=require('fs')

fs.readFile('input.txt',{encoding:'utf8'},function(err,data){
    if(err){
        return console.error("err")
    }
    console.log("Asynchronous read:"+data.toString());
});

//Synchronous read

var data=fs.readFileSync('input.txt');
console.log("Synchrounous read:"+data.toString())
console.log("Program ended")

fs.stat('input.txt',function(err,stats){
    if(err){
        return console.error(err)
    }
    console.log(stats)
})