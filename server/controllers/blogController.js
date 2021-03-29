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

router.get('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    dbServices.getOne(Blog, postId)
    .then(post => res.json(post))
})

router.post('/posts/:postId/submit-comment', (req, res) => {
    const id = req.params.postId;
    console.log(id)
    const element = req.body;
    dbServices.updateDbArray(Blog, id , 'comments', element)
    .then(result=> res.json(result))
    .catch(err => console.log(err))
})





module.exports = router;