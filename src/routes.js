import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Learn from './components/learn';
import Humanity from './components/humanity';
import Audio from './components/audio';
import Contact from './components/contact';
import Profile from './components/profile';
import NewMember from './components/new_member';
import DeleteMember from './components/delete_member';
import EditMember from './components/edit_member';
import NoMatch from './components/no_match';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/humanity" component={Humanity}/>
    <Route path="/learn" component={Learn}/>
    <Route path="/audio" component={Audio}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/profile/:username" component={Profile}/>
    <Route path="/new-member" component={NewMember}/>
    <Route path="/delete-member" component={DeleteMember}/>
    <Route path="/edit/:username" component={EditMember}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
