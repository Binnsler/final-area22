const Profile = require('../models/Profile');

exports.create = function(req, res){

  const username = req.body.username;

  console.log(req.body)

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
      title: req.body.title,
      description: req.body.description,
      email: req.body.email,
      profilePic: req.body.profilePic
    });

    profile.save(function(err, member){
      if(err){
        return res.status(422).send('Error saving profile');
      }

      res.send(member);
    })
  });
}

// Edit a member
exports.edit = function(req, res){
  console.log('Trying to edit')
  const username = req.body.username;

  Profile.findOne({username: username}, function(err, existingUser){
    if(err){
      res.status(422).send({error: err});
    }

      existingUser.name = req.body.name
      existingUser.title = req.body.title
      existingUser.description = req.body.description
      existingUser.email = req.body.email

      if(req.body.profilePic !== null){
        existingUser.profilePic = req.body.profilePic;
      }

    existingUser.save(function(err, member){
      if(err){
        return res.status(422).send('Error saving profile');
      }

      res.send(member);
    })
  });
}

// Get a member
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
  Profile.find({}, function(err, users){
    if(err){
      res.status(422).send(err);
    }

    res.send(users)
  });
}

exports.delete = function(req, res){
  var username = req.param('username');

  Profile.findOne({username: username}, function(err, member){
    if(err){
      return res.status(422).send(err)
    }

    member.remove(function(err, result){
      if(err){
        return res.status(422).send(err)
      }

      Profile.find({}, function(err, users){
        if(err){
          res.status(422).send(err);
        }

        res.send(users)
      });
    })
  })
}
