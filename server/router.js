const { Router } = require('express');
const router = Router();
const bookingController = require('./controllers/bookingController');
const blogController = require('./controllers/blogController');
router.use('/bookings', bookingController)
router.use('/blog', blogController)

module.exports = router