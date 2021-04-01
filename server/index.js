const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('./config/mongoose')
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
const routes = require('./router')
app.use(routes)

app.listen(5000, () => { console.log('Server is listening to port 5000') })