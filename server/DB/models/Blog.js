const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    'title': {
        type: String,
        required: [true, 'Blog title is required in order to create a blog post']
    },
    'content': {
        type: String,
        required: [true, 'Blog content is required in order to create a blog post']
    },
    author: {
        type: String,
        required: [true, 'Please specify author of the post'],
    },
    createdOnDate: {
        type: String,
        require: [true, 'The date of the post creation is required.']
    },
    imageUrl: {
        type: String,
    },
});

module.exports = mongoose.model('Blog', blogSchema);