const Booking = require('../DB/models/Booking');

function create(Model, details) {
    let model = new Model(details);
    return model.save();
}

function getAll(Model) {
    return Model.find({}).lean();
}

function getOne(Model, id) {
    return Model.findById(id).populate('bookings').lean();
}

function addToDbArray(Document, id, arrayName, element) {
    return Document.updateOne(
        { _id: id },
        { $push: { [arrayName]: element } }
    ).lean()
}

function removeFromDbArray(Document, id, arrayName, element) {
    return Document.updateOne(
        { _id: id },
        { $pull: { [arrayName]: element } }
    ).lean()
}

function updateDoc(Document, id, body) {
    return Document.findOneAndUpdate({ _id: id }, body, { new: true })
}

module.exports = {
    create,
    getAll,
    getOne,
    addToDbArray,
    removeFromDbArray,
    updateDoc
}