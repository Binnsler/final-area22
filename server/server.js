// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const router = require('./router');

// DB Setup
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/app', function(err, res){
  if(err){
    console.log('ERROR CONNECTING TO: ' + process.env.MONGODB_URI)
  }
  else{
    console.log('SUCCEEDED CONNECTION TO: ' + process.env.MONGODB_URI)
  }
});

// Setup
app.use(morgan('combined')); // Logging requests to console
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json({type: '*/*'})); // Parse requests to JSON
app.use(express.static(__dirname + '/../')); // Serve from root directory


// Routes
router(app);
// Always send index.html for React/Redux
app.get('*', function(req, res){
  res.sendFile(path.resolve('./index.html'))
});

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
