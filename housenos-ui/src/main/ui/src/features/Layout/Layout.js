import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import { PropertySearch } from '../PropertySearch';
import { MyProperties } from '../MyProperties';
import PropertyListing from '../MyProperties/PropertyListing';
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
                <AuthenticatedRoute exact path="/properties" component={MyProperties} />
                <AuthenticatedRoute exact path="/properties/:propertyId/view" component={MyProperties} />
                <Route exact path="/properties/listing" component={PropertyListing} />
            </Switch>
        </>
    );
}

export default Layout;
