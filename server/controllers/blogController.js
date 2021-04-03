const router = require('express').Router();
const dbServices = require('../services/db');

const Blog = require('../DB/models/Blog');
const User = require('../DB/models/User');

router.post('/add-blog-post', (req, res) => {

    const blogData = req.body;
    dbServices.create(Blog, { ...blogData })
        .then(response => {
            dbServices.addToDbArray(User, blogData.creator, 'blogPosts', response.id)
                .then(res.json(response))
        })
        .catch(err => console.log(err))
})

router.post('/:blogId/add-post-to-favorites', (req, res) => {
    const { blogId } = req.params;
    const { userID } = req.body;
    dbServices.addToDbArray(User, userID, 'favoritePosts', blogId)
    .then(result => {
        console.log(result);
        res.json(result)
    })
    .catch(err => console.log(err))    
})

router.post('/:blogId/remove-post-from-favorites', (req, res) => {
    const { blogId } = req.params;
    const { userID } = req.body;
    dbServices.removeFromDbArray(User, userID, 'favoritePosts', blogId)
    .then(result => {
        console.log(result);
        res.json(result)
    })
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
    dbServices.addToDbArray(Blog, id, 'comments', element)
        .then(result => res.json(result))
        .catch(err => console.log(err))
})


module.exports = router;