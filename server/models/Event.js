const mongoose = require( "mongoose" );
const Schema = mongoose.Schema;


// Define our model
const eventSchema = new Schema( {
  "name": String,
  "date": String,
  "time": String,
  "description": String,
  "profilePic": String
} );



// Create the model class
const ModelClass = mongoose.model( "event", eventSchema );

// Export the model
module.exports = ModelClass;
