//Structure of Info Required from User

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{ 
        type:String,
        require:true
        
    },
    phoneNo:{
        type:String,
        length:10,
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)