const router = require('express').Router();
const dbServices = require('../services/db');

const Blog = require('../DB/models/Blog');

router.post('/add-blog-post', (req, res) => {
    console.log(req.body);
    const blogData = req.body;
    dbServices.create(Blog, blogData)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})

router.get('/all-posts', (req, res) => {
    console.log(req)
    dbServices.getAll(Blog)
    .then(response => res.json(response))
    .catch(err => console.log(err))
})



module.exports = router;