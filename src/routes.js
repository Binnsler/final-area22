import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Studio from './components/studio';
import Sound from './components/sound';
import Contact from './components/contact';
import Profile from './components/profile';
import NewMember from './components/new_member';
import DeleteMember from './components/delete_member';
import NoMatch from './components/no_match';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/studio" component={Studio}/>
    <Route path="/sound" component={Sound}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/profile/:username" component={Profile}/>
    <Route path="/new-member" component={NewMember}/>
    <Route path="/delete-member" component={DeleteMember}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
