const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')

let loggedIn = false
let tempUser;

const registerUser = async(req,res)=>{
    try {

        const name = req.body.name;
        const email = req.body.email; 
        const password = req.body.password;
        const phoneNo = req.body.phoneNo;
        // const {name,email,password} =req.body//should be in same sequence

        const checkUser = await User.findOne({email}); //check if email already present in db

        if(checkUser){
            return res.status(409).json({
                success:false,
                message:"User already registred, Please login",
                data:null
            })
        }
        if(phoneNo){
            const checkPhoneNo  =  await User.findOne({phoneNo});

            if(checkPhoneNo){
                return res.status(409).json({
                    success:false,
                    message:"Phone Number already registred",
                    data:null
                })
            }
        }

        
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser =  new User({
            name,
            email,
            password:hashPassword,
            phoneNo:phoneNo
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

const userLogin = async(req, res)=>{
    
    try{
        const email = req.body.email;
        const password = req.body.password;

        const getUser = await User.findOne({email});

        if(!getUser){
            return res.status(404).json({
                success:false,
                data:null,
                message:"User Not found. Please Register.."
            })
        }

        const isPasswordValid = await bcrypt.compare(password, getUser.password);

        if(!isPasswordValid){
            return res.status(401).json({
                success:false,
                data:null,
                message:"Invalid Password!!"
            })
        }
        loggedIn = true;
        tempUser = getUser;
        return res.status(201).json({
            success:true,
            message:"Login Successfull !!",
            data:getUser
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            data:null,
            message:"Internal Server Error"
        })
    }
};

const userUpdate = async(req,res)=>{
    try{
        const id = req.params.id;
        const {name} = req.body;
        const updateUser = await User.findByIdAndUpdate(id,{name})
        return res.status(200).json({
            success:true,
            data:updateUser,
            message:'User Updated Successfully!!'
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            data:null,
            message:"Internal Server Error"
        })
    }
};

const delUser = async(req, res)=>{
    try{


        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(id)

        return res.status(201).json({
            success:true,
            data:deleteUser,
            message:'User Deleted Successfully'
        })
        
        


    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            data:null,
            message:'Internal Server Error'
        })
    }
};

module.exports ={
    registerUser,
    userLogin,
    userUpdate,
    delUser
};