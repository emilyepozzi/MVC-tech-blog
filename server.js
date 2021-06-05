// set up ======================================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configuration ===============================================================
app.use(bodyParser());

var port = process.env.PORT || 8000;

var mongoose = require('mongoose');
var database = require('./config/database');
mongoose.connect(database.url);
var Video = require('./app/models/video');

// routes =======================================================================
app.use('/api', require('./app/routes/routes').router);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("ready captain, on deck" + port);

module.exports = app;