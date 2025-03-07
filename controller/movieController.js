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

const top10Rated = async(req, res)=>{
    try{
        const movies = await Movie.find({ 'imdb.rating': { $ne: null, $ne: '' } }).sort({'imdb.rating': -1}).limit(10);

        return res.status(200).json({
            success:true,
            data:movies,
            message:'Sort successfull'
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

const getMoviebyGenre = async(req, res)=>{
    
    let genre = req.query.genre.trim();

    try{
        
        const movies = await Movie.find({genres: {$in:[genre]}}).sort({'imdb.rating': -1}).limit(10).lean();

        return res.status(200).json({
            success:true,
            data: movies,
            message:'Sort Successfull!!'
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

module.exports={
    getMovie,
    top10Rated,
    getMoviebyGenre    
}