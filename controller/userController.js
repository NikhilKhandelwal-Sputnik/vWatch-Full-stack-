const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')

const register = async(req,res)=>{
    try {

        const name = req.body.name;
        const email = req.body.email; 
        const password = req.body.password;
        // const {name,email,password} =req.body//should be in same sequence

        const checkUser = await User.findOne({email}); //check if email already present in db

        if(checkUser){
            return res.status(409).json({
                success:false,
                message:"User already registred, Please login",
                data:null
            })
        }

        
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser =  new User({
            name,
            email,
            password:hashPassword
        });

        await newUser.save();

        return res.status(201).json({
            success:true,
            message:"User registred Successfully",
            data:newUser
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"internal Server error",
            data:null
        })
    }
};


module.exports ={register}