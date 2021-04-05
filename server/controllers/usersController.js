const router = require('express').Router();
const dbServices = require('../services/db');
const User = require('../DB/models/User');

router.post('/:userId/edit-profile', (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    res.json({ok: 'np'})
})

module.exports = router;