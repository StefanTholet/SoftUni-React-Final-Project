const mongoose = require('mongoose')

async function ensureUnique(modelData, value) {
    try {
        const [modelName, path] = modelData;
        let model = mongoose.model(modelName);
        let query = await model.find({ [path]: value });
        return query.length === 0;
    } catch (error) {
        throw new Error(error)
    }

}
module.exports = ensureUnique;