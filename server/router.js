const Email = require('./controllers/email');
const Profile = require('./controllers/profile');

module.exports = function(app){


  // Sendgrid API call for /contact
  app.post('/email', Email.sendEmail);

  // Create a Profile
  app.post('/api/new-member', Profile.create);
  // Edit a Profile
  app.post('/api/edit-member', Profile.edit);
  // Get a Profile
  app.get('/api/getMember', Profile.get)
  // Get all Profiles
  app.get('/api/allMembers', Profile.getAll)
  // Delete a Profile
  app.delete('/api/deleteMember', Profile.delete)
}
