const router = require('express').Router();

const dbServices = require('../services/db');
const Booking = require('../DB/models/Booking');

router.post('/add-booking', (req, res) => {
    console.log(req.body)
    const bookingData = req.body;
    if (bookingData.children === 'No children') bookingData.children = 0;
    dbServices.create(Booking ,bookingData)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

module.exports = router;