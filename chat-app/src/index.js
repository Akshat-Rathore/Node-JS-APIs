const http=require('http')
const express=require('express')
const path = require('path')
const socketio=require('socket.io')
const app =express()
const server=http.createServer(app)

const io = socketio(server)

const port= process.env.PORT || 3000
const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

let count =0

io.on('connection',(socket)=>{
    console.log("New connection (socket)")
    count++

    socket.emit('message',"welcome")
    socket.broadcast.emit('message',"new user ;)")
    socket.on('sent',(message)=>{
        count++
        io.emit('message',message)
    })

    socket.on('disconnect',()=>{
        io.emit('message',"A user has left:(")
    })
    socket.on('location',(location)=>{
        const message="Location: Lat:"+location.lat+", Long:"+location.long
        io.emit('message',message)
    })
})

server.listen(port,()=>{
    console.log(`Listening at port ${port}!`)
})