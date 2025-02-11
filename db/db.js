//DB Creation

const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://user1:bX6xZ2L5KXicOc34@cluster0.3bhg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

        console.log('Database Connected');
    }
    catch(error){
        console.log(error);
    }
};

module.exports = connectDB;