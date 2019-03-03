import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './pages/app';
import Home from './pages/home';
import Development from './pages/development';
import Community from './pages/community';

import Audio from './pages/audio';
import Contact from './pages/contact';
import Profile from './components/Profile/profile';
import NewMember from './components/Profile/new_member';
import Members from './components/Profile/members';
import EditMember from './components/Profile/edit_member';
import NewEvent from './components/Event/new_event';
import Events from './components/Event/events';
import EditEvent from './components/Event/edit_event.js';
import SoapboxSouls from './pages/soapboxsouls.js';
import EngineeringCourse from './pages/engineeringcourse.js';
import NoMatch from './pages/no_match';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="lessons" component={Development}/>
    <Route path="community" component={Community}/>
    <Route path="audio" component={Audio}/>
    <Route path="contact" component={Contact}/>
    <Route path="profile">
        <Route path=":username" component={Profile}/>
    </Route>
    <Route path="new-member" component={NewMember}/>
    <Route path="members" component={Members}/>
    <Route path="edit/:username" component={EditMember}/>
    <Route path="new-event" component={NewEvent}/>
    <Route path="events" component={Events}/>
    <Route path="soapbox-souls" component={SoapboxSouls}/>
    <Route path="engineering-course" component={EngineeringCourse}/>
    <Route path="edit-event/:id" component={EditEvent}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
