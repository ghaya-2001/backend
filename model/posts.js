const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    userId:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Posts', Post)