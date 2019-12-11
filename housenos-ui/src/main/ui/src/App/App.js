import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from '../store/Store';
import Signup from '../features/Signup/Signup';
import SignupSuccess from '../features/Signup/SignupSuccess';
import Layout from '../features/Layout/Layout';
import Login from '../features/Login/Login';
import Activate from '../features/Account/Activate/Activate';
import {LoadIcons} from '../config/IconLoader';

const store = Store();
LoadIcons();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/signup-success" component={SignupSuccess} />
          <Route path="/login" component={Login} />
          <Route path="/activate/:key?" component={Activate} />
          <Route path="/" exact component={Layout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
