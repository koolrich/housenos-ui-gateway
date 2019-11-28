import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser, faAt, faLock, faPhone, faEnvelope, faAddressCard, faBriefcase, faCity,
  faHome, faUniversity, faSearch, faStreetView, faCog, faPowerOff, faIdCard, faSignInAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '../store/Store';
import { Registration } from '../features/Registration';
import { Layout } from '../features/Layout';
import { Login } from '../features/Login';

library.add(faUser, faAt, faLock, faPhone, faEnvelope, faAddressCard, faBriefcase, faCity, faHome,
  faUniversity, faSearch, faStreetView, faCog, faPowerOff, faIdCard, faSignInAlt, faUserPlus)

const store = Store();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
        <Route path="/register" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
