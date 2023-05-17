const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
   res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{
    //console.log(req.body)
    let firstName = req.body.firstNameInput
    let lastName = req.body.lastNameInput 
    let email = req.body.emailInput 

    
})

app.listen(3000,()=>{
    console.log("the express server is started on port number 3000")
})