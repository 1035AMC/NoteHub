// server.js file
// setting stuff up

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();


// var mongoose = require('mongoose');

// configuriation 

// later connect mongoose to our mongoDb 
//mongoose.connect('mongoDb database')

app.use(express.static(__dirname + '/public'));	// set the static files location /public/img will be /img for users
app.use(morgan('dev'));			// log every request to the console
app.use(bodyParser());			// pull information from html in POST
app.use(methodOverride());			// simulate DELETE and PUT

// listen (start app with node server.js) ====

app.listen(5000);
console.log("App is listening to port 5000");

