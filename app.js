const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()
app.use(express.static("public"))
app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html")
})

app.listen(3000,()=>{
    console.log("the express server is started on port number 3000")
})