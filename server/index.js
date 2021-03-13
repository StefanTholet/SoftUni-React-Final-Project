const express = require('express');
const app = express();
const mongoose = require('./config/mongoose')
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors())
app.use(express.json());

const router = require('./router')
app.use(router)

app.listen(5000, () => { console.log('Server is listening to port 5000') })