// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var myRootRef = new Firebase('https://twilio-thing.firebaseio.com/numbers');
// myRootRef.set("hello world!");

// SERVER VARIABLES
var app = express();
var port = 3030;

// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// ENDPOINTS
app.post('/support/messages', function(req, res){
	
})

// SERVER LISTENING
app.listen(port);
console.log('Listening on port', port);