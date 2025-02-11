var http=require("http");
const { json } = require("stream/consumers");

var server=http.createServer(async(req,res)=>{
    var data=await fetch("https://fakestoreapi.com/products");
    var dataa=await data.json();

    dataa.sort((a,b)=>{

    })
    res.write(JSON.stringify(dataa));
    res.end()

})

var port=3000;
server.listen(port,()=>{
    console.log("server is created");
})