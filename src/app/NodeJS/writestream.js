var fs=require('fs')
var data='A solution of all Technology';

var writerStream=fs.createWriteStream('output.txt')
writerStream.write(data,'utf8')
writerStream.end()

writerStream.on('finish',()=>{
    console.log("write completed")
})

writerStream.on('error',(err)=>{
    console.log(err.stack)
})
console.log("program Ended")