var fs=require('fs')

fs.readFile('taskfile.txt',{'encoding':'utf8'},(err)=>{
    if(err) throw err;  
})

var data=fs.readFileSync('taskfile.txt',{'encoding':'utf8'})
console.log("No of Character in the file is:"+data.length)
console.log("No of Words in the file:"+data.split(' ').length)
count=0
for(let i=0;i<data.length;i++){
    if(data.charAt(i)=='\n'){
        count++;
    }
}

console.log("No of lines in the file:"+(count+1))