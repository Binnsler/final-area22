const Profile = require('../models/Profile');

exports.create = function(req, res){

  const username = req.body.username;

  if(!username){
    console.log('No username');
    return res.status(422).send({error: 'You must provide a unique username'});
  }

  Profile.findOne({username: username}, function(err, existingUser){
    if(err){
      res.status(422).send({error: err});
    }

    if(existingUser){
      return res.status(422).send('Username is already in use');
    }

    const profile = new Profile({
      username: req.body.username,
      name: req.body.name,
      description: req.body.description,
      email: req.body.email
    });

    profile.save(function(err, member){
      if(err){
        return res.status(422).send('Error saving profile');
      }

      res.send(member);
    })
  });
}

exports.get = function(req, res){
  var username = req.param('username');

  Profile.findOne({username: username}, function(err, member){
    if(err){
      return res.status(422).send({error: err});
    }

    if(!member){
      return res.status(404).send('User not found')
    }

    res.send(member);
  });
}

exports.getAll = function(req, res){
  console.log('Getting all members');

  res.send('Here are members from server')
}
