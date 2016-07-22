const Email = require('./controllers/email');
const Profile = require('./controllers/profile');
const path = require('path');

module.exports = function(app){


  // Sendgrid API call for /contact
  app.post('/email', Email.sendEmail);

  // Create a Profile
  app.post('/api/new-member', Profile.create);
  // Get a Profile
  app.get('/api/getMember', Profile.get)
  // Get all Profiles
  app.get('/api/allMembers', Profile.getAll)
  // Delete a Profile
  app.delete('/api/deleteMember', Profile.delete)
}