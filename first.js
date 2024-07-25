//port specfic,interal addre
//header=metadata,it taketwo argument(status,key value,
//loopback address, //1loopbackaddre)
//buffer are like array (fixed size)fixed length bit structure encoded contniously scanned
//utf-8 used to convert string to n=binary ,stream = flow of data,streaming
const express =require("express");
const app=express();
const PORT =3000;
app.get('/',(req,res)=>{
    res.end("hello world")
});
app.listen(PORT,()=>{
    console.log(`example ${PORT}`)
})