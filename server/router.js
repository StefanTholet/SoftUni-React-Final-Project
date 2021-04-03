const { Router } = require('express');
const router = Router();
const bookingController = require('./controllers/bookingController');
const blogController = require('./controllers/blogController');
const authController = require('./controllers/authController');
router.use('/bookings', bookingController)
router.use('/blog', blogController)
router.use('/auth', authController)

module.exports = router