const express = require('express')
const User = require('./models/users')
require('./db/mongoose')
const UserRouter= require('./routers/users')

// const router = express.Router()

const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 3000

app.use((req,res,next)=>{

    // console.log("trym")
    next()
})

app.use(express.json())
app.use(UserRouter)

app.listen(port,()=>{
    console.log("listening on "+ port)
})

const myFunction = async ()=>{
    const token = jwt.sign({ _id:'abc123'},'vvuutvutt',{expiresIn: '1 seconds'})
    console.log(token)
    console.log(jwt.verify(token,'vvuutvutt'))
}

// myFunction()

const pet = {
    'name':'hel'
}
 pet.toJSON=function(){
     return this
 }


