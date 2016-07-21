const Email = require('./controllers/email');
const Profile = require('./controllers/profile');

module.exports = function(app){

  // We've got a pulse
  app.get('/', function(req, res){
    res.send('HI');
  });

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
