const express = require('express')
const User = require('./models/users')
require('./db/mongoose')
const UserRouter= require('./routers/users')

// const router = express.Router()


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(UserRouter)

app.listen(port,()=>{
    console.log("listening on "+ port)
})