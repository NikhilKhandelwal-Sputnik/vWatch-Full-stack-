const User = require('../models/userSchema')

const register = async(req,res)=>{
    try {
        const {name,email,password} =req.body;

        const checkUser = await User.findOne({email});

        if(checkUser){
            return res.status(409).json({
                success:false,
                message:"User already registred, Please login",
                data:null
            })
        }

        const newUser =  new User({
            name,
            email,
            password
        });

        await newUser.save();

        return res.status(201).json({
            success:true,
            message:"User registred Successfully",
            data:newUser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal Server error",
            data:null
        })
    }
};


module.exports ={register}