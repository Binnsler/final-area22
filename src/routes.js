import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import Development from './components/development';
import Humanity from './components/humanity';
import Audio from './components/audio';
import Contact from './components/contact';
import Profile from './components/Profile/profile';
import NewMember from './components/Profile/new_member';
import Members from './components/Profile/members';
import EditMember from './components/Profile/edit_member';
import NewEvent from './components/Event/new_event';
import Events from './components/Event/events';
import EditEvent from './components/Event/edit_event.js';
import NoMatch from './components/no_match';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/humanity" component={Humanity}/>
    <Route path="/development" component={Development}/>
    <Route path="/audio" component={Audio}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/profile/:username" component={Profile}/>
    <Route path="/new-member" component={NewMember}/>
    <Route path="/members" component={Members}/>
    <Route path="/edit/:username" component={EditMember}/>
    <Route path="/new-event" component={NewEvent}/>
    <Route path="/events" component={Events}/>
    <Route path="/edit-event/:id" component={EditEvent}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
