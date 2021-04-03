const router = require('express').Router();
const authService = require('../services/authService');

const dbServices = require('../services/db');

const User = require('../DB/models/User');

router.post('/register', async (req, res) => {
    let { firstName, lastName, password, email } = req.body;
    console.log(req.body)
    try {
        let user = await authService.register({ firstName, lastName, email, password });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let verifiedUser = await authService.login({ email, password });
        res.json(verifiedUser);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

module.exports = router;