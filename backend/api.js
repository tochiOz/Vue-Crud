//Engine room
import express from 'express'
import router from './api/router/router'

const app = express(),
bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

const port = process.env.PORT || 7000;

app.listen(port, function () {
    console.log('connecting through port ' + port + ' please wait.......')

})