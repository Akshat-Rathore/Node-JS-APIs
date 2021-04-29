const express = require('express')
const User = require('./models/users')
require('./db/mongoose')
// const User= require('./models/users')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users',(req,res)=>{
    if(req.body){
        const user = new User(req.body)
        user.save().then(()=>{
            console.log(user)
            res.status(200).send(user)
        }).catch((error)=>{
            res.status(400).send(error)
            console.log(error)
        })
        
    }
    
})


app.listen(port,()=>{
    console.log("listening on "+ port)
})