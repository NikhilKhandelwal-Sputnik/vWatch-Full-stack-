const Product = require('../models/productSchema')

const register = async(req,res)=>{
    try {
        const {name,price,description} = req.body;


        const checkProduct = await Product.findOne({name:req.body.name});

        if(checkProduct){
            return res.status(409).json({
                success:false,
                message:"Product already registred",
                data:null
            })

        }
        const newProduct = new Product({
            name,
            price,
            description
        });

        newProduct.save();

        return res.status(201).json({
            succes:true,
            message:"New product Registered successfully",
            data:newProduct
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            data:null
        })
        
    }
}