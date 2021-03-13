const mongoose = require('mongoose');
const mongooseEndPoint = require('../credentials')

let connection = mongoose.connect(mongooseEndPoint, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = connection;

const db = mongoose.connection;                                      
db.once('open', console.log.bind(console, 'Db Connected!'));
db.on('error', console.error.bind(console, 'connection error:'));