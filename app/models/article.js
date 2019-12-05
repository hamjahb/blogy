// require necessary NPM packages
const mongoose = require('mongoose');

// define Tweet Schema
const commentSchema = new mongoose.Schema({
    commentText: String
}, {timestamps:true})


// define Article Schema
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    content: String,
    author: {
        type:String,
        required: true
    },
    published: {
        type: Boolean,
        default: true
    },
    publishedOn: {
        type: Date,
        default: Date.now
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

// compile our model based on the schema
const Article = mongoose.model('Article', articleSchema);
const Comment = mongoose.model('Comment', commentSchema);
// Export our model for use
module.exports = {Article, Comment}
