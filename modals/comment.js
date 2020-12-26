const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    postid: {
        type:Number,
        required:true
    },
    comment: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Comment', commentSchema)