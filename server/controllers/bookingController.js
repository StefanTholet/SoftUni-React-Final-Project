const router = require('express').Router();
const bookingServices = require('../services/booking');

router.post('/book', (req, res) => {
    console.log(req.body)
    bookingServices.create(req.body)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

module.exports = router;