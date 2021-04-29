const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User',{
    name:{
        type : String
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
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('not email')
            }
        }
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = User