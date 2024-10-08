const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    comment: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;