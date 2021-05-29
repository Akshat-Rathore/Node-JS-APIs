const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt= require('bcryptjs')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
    name:{
        type : String,
        required: true,
        trim: true
    },
    age:{
        type : Number,
        validate(value){
            if(value<0){
                throw new Error('not email')
            }
        }
    },
    email:{
        type : String,
        required : true,
        unique :true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('not email')
            }
        }
    },
    password:{
        type: String,
        required: true
    },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }]
})

userSchema.methods.generateAuthToken= async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()},'check')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email,password)=>{
    const user= await User.findOne({email})
    if(!user){
        throw new Error("Email not found")
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error("Wrong Password")
    }
    return user
}


userSchema.pre('save',async function(next){
    const user= this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})

const User = mongoose.model('User',userSchema)

module.exports = User