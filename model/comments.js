const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    postId:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('Comments', Comment)