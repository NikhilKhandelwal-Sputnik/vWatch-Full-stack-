const Comment = require('../models/commentSchema');

const getAllComment = async(req, res)=>{

    let {page,limit} = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const skip = (page-1)*limit;

    try{
        const allComment = await Comment.find().skip(skip).limit(limit);
        const total = await Comment.countDocuments();
        
        return res.status(200).json({
            success:true,
            data:allComment,
            pages:Math.ceil(total/limit),
            message:'got all users'
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

module.exports = {getAllComment};