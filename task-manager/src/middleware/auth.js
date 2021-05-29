const jwt = require('jsonwebtoken')
const User=require('../models/users')
const auth=async (req,res,next)=>{
    // console.log("a\nm")
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoder= jwt.verify(token,'check')
        const user= await User.findOne({_id:decoder._id, 'tokens.token':token})
        if(!user){
            // res.send("Wrong token")
            throw new Error()
        }
        req.token=token
        req.user=user
        next()
    }catch(e){
        res.send("Wrong Header")
    }
    
}
module.exports = auth