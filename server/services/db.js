const User = require('../DB/models/User')
const Booking = require('../DB/models/Booking');
function create(Model, details) {
    let model = new Model(details);
    return model.save();
}

function getAll(Model) {
    return Model.find({}).lean();
}

function getOne(Model, id) {
    return Model.findById(id).lean();
}

function addToDbArray(Model, id, arrayName, element) {
    return Model.updateOne(
        { _id: id },
        { $push: { [arrayName]: element } }
    ).lean()
}

function removeFromDbArray(Model, id, arrayName, element) {
    return Model.updateOne(
        { _id: id },
        { $pull: { [arrayName]: element } }
    ).lean()
}

function updateDoc(Model, id, body) {
    return Model.findOneAndUpdate({ _id: id }, body, { new: true }).populate('bookings').populate('blogPosts').lean()
}

function deleteDoc(Model, _id) { 
    return Model.deleteOne({_id})
}

function getUpdatedUser (_id) {
    return User.findById(_id).populate('bookings').populate('blogPosts').lean()
}

function getAllById(Model, ids) {
   return Model.find({ _id: { $in: [...ids]}})
}
module.exports = {
    create,
    getAll,
    getOne,
    addToDbArray,
    removeFromDbArray,
    updateDoc,
    deleteDoc,
    getUpdatedUser,
    getAllById
}