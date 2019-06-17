import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faAt, faLock, faPhone, faEnvelope, faAddressCard, faBriefcase, faCity, 
faHome, faUniversity, faSearch, faStreetView, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Registration } from '../Registration';
import { Layout } from '../Layout';

library.add(faUser, faAt, faLock, faPhone, faEnvelope, faAddressCard, faBriefcase, faCity, faHome, 
  faUniversity, faSearch, faStreetView, faCog, faPowerOff)

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Layout}/>
      <Route exact path="/register" component={Registration}/>
    </Switch>
  );
}

export default App;
