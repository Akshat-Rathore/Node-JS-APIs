const socket = io()

socket.on('message',(message)=>{
    console.log(message)
})

document.querySelector('#mes').addEventListener('submit',(e)=>{
    e.preventDefault()
    const message=document.querySelector('input').value
    console.log( message)
    socket.emit('sent',message)
})

document.querySelector('#mess').addEventListener('click',(e)=>{
    e.preventDefault()
    const message=document.querySelector('input').value
    console.log( message)
    socket.emit('sent',message)
})

document.querySelector('#sendl').addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert("not supported''")
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position)
        const location={
            lat:position.coords.latitude,
            long:position.coords.longitude
        }
        socket.emit('location',location)
    })
})
