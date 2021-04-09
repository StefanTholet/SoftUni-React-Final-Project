const router = require('express').Router();
const dbServices = require('../services/db');

const Blog = require('../DB/models/Blog');
const User = require('../DB/models/User');

router.post('/add-blog-post', (req, res) => {
    const blogData = req.body;
    const { userId } = blogData;
    dbServices.create(Blog, { ...blogData })
        .then(createdBlog => dbServices.addToDbArray(User, userId, 'blogPosts', createdBlog.id))
        .then(r => dbServices.getUpdatedUser(userId))
        .then(updatedUser => res.json(updatedUser))
        .catch(err => console.log(err))
})

router.post('/:blogId/delete-post', (req, res) => {
    const { blogId } = req.params;
    const { userId } = req.body;
    dbServices.deleteDoc(Blog, blogId)
        .then(dbServices.getUpdatedUser(userId)
            .then(updatedUser => res.json(updatedUser))
        )
})


router.post('/:blogId/add-post-to-favorites', (req, res) => {
    const { blogId } = req.params;
    const { userId } = req.body;
    dbServices.addToDbArray(User, userId, 'favoritePosts', blogId)
        .then(data => dbServices.getUpdatedUser(userId)
            .then(updatedUser => res.json(updatedUser)))
        .catch(err => console.log(err))
})

router.post('/:blogId/remove-post-from-favorites', (req, res) => {
    const { blogId } = req.params;
    const { userId } = req.body;
    dbServices.removeFromDbArray(User, userId, 'favoritePosts', blogId)
        .then(data => dbServices.getUpdatedUser(userId)
            .then(updatedUser => res.json(updatedUser)))
        .catch(err => console.log(err))
})

router.post('/get-favorites', (req, res) => {
    // console.log(req.body)
    dbServices.getAllById(Blog, req.body.posts)
        .then(data => {
            res.json(data)})
        .catch(err => console.log(err))
})

router.get('/all-posts', (req, res) => {
    dbServices.getAll(Blog)
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.get('/posts/:postId', (req, res) => {
    const postId = req.params.postId;
    dbServices.getOneWithComments(postId)
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

router.post('/posts/:postId/submit-comment', (req, res) => {
    const blogId = req.params.postId;
    const comment = req.body;
    dbServices.addToDbArray(Blog, blogId, 'comments', comment)
            .then(result => res.json(result))
        .catch(err => console.log(err))
})


module.exports = router;