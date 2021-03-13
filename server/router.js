const { Router } = require('express');
const router = Router();

const dbServices = require('./DB/services/service');

router.post('/', (req, res) => {
    dbServices.addProfile(req.body)
    .then(response => console.log(response))
    .catch(err => console.log(err)) 
 })

router.get('/getAll', (req, res) => {
    dbServices.getAll()
    .then(data => res.json(data))
    .catch((err) => res.send('Something went wrong..'))
}) 

module.exports = router