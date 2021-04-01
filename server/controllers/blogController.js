const router = require('express').Router();
const dbServices = require('../services/db');
const multiparty = require('connect-multiparty');
const MultiPartyMiddleware = multiparty({uploadDir: './images'})
const path = require('path');
const fs = require('fs');

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

router.post('/uploads', MultiPartyMiddleware, (req, res) => {
    let TempFile = req.files.upload;
    let TempPathFile = TempFile.path; 
    
    const targetPathUrl = path.join(__dirname, './uploads' + TempFile.name);
    console.log(req.files)
    if (path.extname(TempFile.originalFilename).toLowerCase() === '.png' || '.jpg') {
       fs.rename(TempPathFile, targetPathUrl, err => {
           if (err) return console.log(err)
       }) 
    }
    console.log(req.files.upload)
    res.status(200)
})



module.exports = router;