const register = async(req,res) =>{
    try{

        const{name,email,password} = req.body;

        const checkUser = await UserActivation.findOne({email});


    }catch(error){
        return res.status(500).json({
            success:false,
            message: "Internal Server Error",
            data:null
        })
    }
};

module.exports = {register}