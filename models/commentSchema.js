const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: { 
        type: String,
        require: true
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
}, { collection: 'comments' });

module.exports = mongoose.model("Comment", commentSchema)