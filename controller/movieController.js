const Movie = require("../models/movieSchema")

const getMovie = async(req, res)=>{

    try{
        const movieId = req.params.id;
        const movie = await Movie.findById(movieId);

        return res.status(201).json({
            success:true,
            data:movie,
            message:'Movie Found!!'
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

module.exports={getMovie}