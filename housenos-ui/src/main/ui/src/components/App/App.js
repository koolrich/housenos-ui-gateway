import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from '../layout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Layout}/>
    </Switch>
  );
}

export default App;
