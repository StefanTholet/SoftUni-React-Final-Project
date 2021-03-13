const mongoose =  require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
    },
        imageUrl: {
            type: String
        },
        likes: []
})

module.exports = mongoose.model('Profile', profileSchema);