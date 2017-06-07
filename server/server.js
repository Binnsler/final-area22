const express = require( "express" );
const http = require( "http" );
const bodyParser = require( "body-parser" );
const morgan = require( "morgan" );
const app = express();
const mongoose = require( "mongoose" );
const cors = require( "cors" );
const path = require( "path" );


const router = require( "./router" );

const database = process.env.MONGODB_URI || "mongodb://localhost:27017/app";

// DB Setup
mongoose.connect( database, function( err, res ){
  if( err ){
    console.log( "ERROR CONNECTING TO: " + database );
  }
  else{
    console.log( "SUCCEEDED CONNECTION TO: " + database );
  }
} );

// App Setup
app.use( morgan( "combined" ) ); // Logging requests to console
app.use( cors() ); // Allow cross-origin requests
app.use( bodyParser.json( { type: "*/*", limit: "50mb" } ) ); // Parse requests to JSON
app.use( express.static( __dirname + "/../" ) ); // Serve from root directory


// Routes
router( app );

// Always send index.html for React/Redux
app.get( "*", function( req, res ){
  res.sendFile( path.resolve( "./index.html" ) );
} );

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer( app );

server.listen( port );
