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

module.exports = {
    create,
    getAll,
    getOne
}