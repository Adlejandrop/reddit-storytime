const express = require('express');
const app = express();
const {getPostJSON} = require("./functions")

app.use(express.json())
app.use("/axios",express.static(__dirname + '/node_modules/axios/dist'))
app.use("/bootstrap",express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.use("/css",express.static(__dirname + '/assets/css'))
app.listen(3000,()=>console.log("PORT: 3000 Server Up"))


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
})

app.post("/posts",async(req,res)=>{
    const {url} = req.body
    const postJSON = await getPostJSON(url)
    res.send(postJSON)


})

app.get("/mockup",(req,res)=>{
    res.sendFile(__dirname +"/mockup.html")
})
