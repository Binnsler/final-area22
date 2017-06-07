const Event = require( "../models/Event" );

exports.create = function( req, res ){
  const name = req.body.name;

  if( !name ){
    return res.status( 422 ).send( { error: "You must provide an event name" } );
  }

  const event = new Event( {
    "name": req.body.name,
    "date": req.body.date,
    "time": req.body.time,
    "description": req.body.description,
    "profilePic": req.body.profilePic
  } );

  event.save( function(err, event){
    if(err){
      return res.status(422).send('Error saving event');
    }

    res.send(event);
  })

}

exports.getAll = function(req, res){
  Event.find({}, function(err, events){
    if(err){
      res.status(422).send(err);
    }

    res.send(events);
  });
}

exports.delete = function(req, res){
  var id = req.param('id');
  console.log('REQ.PARAM.ID', id)

  Event.findOne({_id: id}, function(err, event){
    if(err){
      return res.status(422).send(err)
    }

    event.remove(function(err, result){
      if(err){
        return res.status(422).send(err)
      }

      Event.find({}, function(err, events){
        if(err){
          res.status(422).send(err);
        }

        res.send(events)
      });
    })
  })
}

// Get a member
exports.get = function(req, res){
  var id = req.param('id');

  console.log(id)

  Event.findOne({_id: id}, function(err, event){
    if(err){
      return res.status(422).send({error: err});
    }

    if(!event){
      return res.status(404).send('User not found')
    }

    res.send(event);
  });
}

// Edit a member
exports.edit = function(req, res){

  const id = req.body._id;

  Event.findOne({_id: id}, function(err, existingEvent){
    if(err){
      res.status(422).send({error: err});
    }

      existingEvent.name = req.body.name;
      existingEvent.date = req.body.date;
      existingEvent.time = req.body.time;
      existingEvent.description = req.body.description;

      if(req.body.profilePic !== null){
        existingUser.profilePic - req.body.profilePic
      }

    existingEvent.save(function(err, event){
      if(err){
        return res.status(422).send('Error saving profile');
      }

      res.send(event);
    })
  });
}
