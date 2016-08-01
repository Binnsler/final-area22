const Email = require('./controllers/email');
const Profile = require('./controllers/profile');
const Event = require('./controllers/event');

module.exports = function(app){


  // Sendgrid API call for /contact
  app.post('/email', Email.sendEmail);

  // Profile
  app.post('/api/new-member', Profile.create);
  app.post('/api/edit-member', Profile.edit);
  app.get('/api/getMember', Profile.get);
  app.get('/api/allMembers', Profile.getAll);
  app.delete('/api/deleteMember', Profile.delete);

  // Events
  app.post('/api/new-event', Event.create);
  app.get('/api/allEvents', Event.getAll);
  app.get('/api/deleteEvent', Event.delete);
  app.get('/api/getEvent', Event.get);
  app.post('/api/edit-event', Event.edit);
}
