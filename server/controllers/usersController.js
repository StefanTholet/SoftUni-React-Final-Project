const router = require('express').Router();
const dbServices = require('../services/db');
const User = require('../DB/models/User');
const Booking = require('../DB/models/Booking')
router.post('/:userId/edit-profile', (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    dbServices.updateDoc(User, userId, req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err))
    
})

router.post('/:userId/bookings/add', (req, res) => {
    const { userId } = req.params;
    const bookingData = req.body;
    if (bookingData.children === 'No children') bookingData.children = 0;
    dbServices.create(Booking ,bookingData)
    .then(response => {
        dbServices.addToDbArray(User, userId, 'bookings', response.id)
        .then(res.json(response))
    })
        
    .catch(err => console.log(err))
})

module.exports = router;