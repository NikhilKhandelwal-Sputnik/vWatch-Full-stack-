const mongoose = require('mongoose');

const productSchema = new mongoose.SchemaType({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("Product", productSchema)