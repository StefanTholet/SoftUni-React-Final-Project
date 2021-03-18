const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    'check-in': {
        type: String,
        required: [true, 'Check-in date is required in order to make a reservation']
    },
    'check-out': {
        type: String,
        required: [true, 'Check-out date is required in order to make a reservation']
    },
    adults: {
        type: Number,
        required: [true, 'At least one adult must be included in the reservation'],
    },
    children: {
        type: Number,
    },
    rooms: {
        type: Number,
        min: [1, 'One or more rooms must be included in your reservation'] 
    }
});

module.exports = mongoose.model('Booking', bookingSchema);