const { Router } = require('express');
 const router = Router();
const bookingController = require('./controllers/bookingController');


router.get('/', (req, res) => {
    console.log(req.body)
})

router.use('/', bookingController)

module.exports = router