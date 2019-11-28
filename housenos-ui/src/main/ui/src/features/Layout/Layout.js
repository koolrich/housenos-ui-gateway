import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import { PropertySearch } from '../PropertySearch';
import { MyProperties } from '../MyProperties';
import AuthenticatedRoute from '../../util/security/AuthenticatedRoute';
import './index.css';

function Layout(props) {

    useEffect(() => {
        document.body.style.backgroundColor = "";
    }, [])

    return (
        <>
        <Header />
        <Switch>
          <Route exact path="/" component={PropertySearch} />
          <AuthenticatedRoute path="/properties" component={MyProperties} />
        </Switch>
        </>
    );
}

export default Layout;
