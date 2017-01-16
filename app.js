const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const app = express();

// User ES6 promises
mongoose.Promise = global.Promise;

// Check if the process env. is set to test
if (process.env.NODE_ENV !== 'test'){
    //Connect to mongo muber
    mongoose.connect('mongodb://localhost:27017/muber');
}


app.use(bodyParser.json());
router(app);

module.exports = app;