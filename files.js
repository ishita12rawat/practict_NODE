let fs=require("fs")
let path=require('path')
fs.readFile('index.html','utf-8',(err,data)=>{
    if(err){
        console.error('err')
        return;//early return
        //append similar to write
        //mkdir-create,read-readdir,rmdir-remove
    }
    console.log(data)
})