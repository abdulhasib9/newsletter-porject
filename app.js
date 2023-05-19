const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")
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

    //mailchimp 

    let data ={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_field:{
                    FNAME:firstName,
                    LNAME:lastName
                }

            }
        ]
    }

    const jsonData = JSON.stringify(data)
    const url ="https://us21.api.mailchimp.com/3.0/lists/7df0fefc0d"
    const options ={
        method:"POST",
        auth:"hasib:248428b91c6a641f14d92c908ad7545a-us21"
    }
   const request= https.request(url,options,(response)=>{
        response.on("data",(data)=>{
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData)
    request.end()
})


//mailchimp api key 248428b91c6a641f14d92c908ad7545a-us21  audince id 7df0fefc0d
app.listen(3000,()=>{
    console.log("the express server is started on port number 3000")
}) 