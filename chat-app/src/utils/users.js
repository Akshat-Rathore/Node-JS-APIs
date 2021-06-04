const users=[]

const addUser=({id,username,room})=>{
    

    if((!username || !room)){
        return{
            error: 'Data Absent'
        }
    }
    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    const existingUser = users.find((user)=>{
        return user.room === room && user.username===username
    })

    if(existingUser){
        return{
            error: 'Username is in use.'
        }
    }

    const user = {id,username, room}
    users.push(user)
    return{user}
}

const removeUser=(id)=>{
    const index=users.findIndex((user)=>{
        return user.id===id
    })

    if(index!==-1){
        return users.splice(index,1)[0]
    }
}


const getUser = (id)=>{
    const index=users.findIndex((user)=>{
        return user.id===id
    })
    return users[index]
}

const getUsersInRoom = (room)=>{
    const roomUsers=users.filter((user)=>user.room===room)
    return roomUsers
}


module.exports={
    addUser,removeUser,getUser,getUsersInRoom
}