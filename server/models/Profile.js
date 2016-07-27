const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define our model
const profileSchema = new Schema({
  username: String,
  name: String,
  title: String,
  description: String,
  email: String,
  profilePic: String
});



// Create the model class
const ModelClass = mongoose.model('profile', profileSchema); // corresponds to 'user' collection

// Export the model
module.exports = ModelClass;
