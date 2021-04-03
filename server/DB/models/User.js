const mongoose = require('mongoose');
const ensureUnique = require('./helpers/validators');
const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        validate: [
            {
                validator: ensureUnique.bind(undefined, ['User', 'email']),
                message: 'This email address is already taken',
            }
        ]
    },
    password: {
        type: String
    },
    blogPosts: {
        type: []
    },
    favoritePosts: {
        type:[]
    }
    // imageUrl: {
    //     type: String
    // },
    // likes: []
})

module.exports = mongoose.model('User', userSchema);