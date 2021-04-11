const router = require('express').Router();
const dbServices = require('../services/db');
const User = require('../DB/models/User');
const Booking = require('../DB/models/Booking')

router.get('/:userId/get-current', (req, res) => {
    const { userId } = req.params;
    dbServices.getOne(User, userId)
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

router.post('/:userId/edit-profile', (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    dbServices.updateDoc(User, userId, req.body)
        .then(data => dbServices.getUpdatedUser(userId))
        .then(updateduser => res.json(updateduser))
        .catch(err => console.log(err))

})

router.post('/:userId/bookings/:bookingId/edit', (req, res) => {
    const { bookingId } = req.params;
    const { userId } = req.params;
    dbServices.updateDoc(Booking, bookingId, req.body)
        .then(data => dbServices.getUpdatedUser(userId))
        .then(updateduser => res.json(updateduser))
        .catch(err => console.log(err))

})

router.post('/:userId/bookings/add', (req, res) => {
    const { userId } = req.params;
    const bookingData = req.body;
    
    if (bookingData.children === 'No children') bookingData.children = 0;
    dbServices.create(Booking, bookingData)
        .then(response => {
            dbServices.addToDbArray(User, userId, 'bookings', response.id)
                .then(data => dbServices.getUpdatedUser(userId))
                .then(updateduser => res.json(updateduser))
                .catch(err => console.log(err))
        })

        .catch(err => console.log(err))
})

router.get('/:userId/get-info', (req, res) => {
    dbServices.getOne(User, req.params.userId)
        .then(user => res.json(user))
        .catch(err => console.log(err))
})
router.post('/:userId/delete-favorite-post', (req, res) => {
    const { blogId } = req.body;
    const { userId } = req.params;
    dbServices.removeFromDbArray(User, userId, 'favoritePosts', blogId)
        .then(data => dbServices.getUpdatedUser(userId))
        .then(updateduser => res.json(updateduser))
        .catch(err => console.log(err))
})


module.exports = router;