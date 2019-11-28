import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';

import AccountMenu from '../Menus/AccountMenu';
import MenuItem from '../Menus/MenuItem';
import { Brand } from './Brand';
import { hasAnyAuthority } from '../../../util/security/SecurityUtils';
import { ROLES } from '../../../config/Config';

function mapStateToProps(state) {
    return {
        isAuthenticated: state.login.isAuthenticated,
        user: state.login.user,
        canListProperty: state.login.isAuthenticated && hasAnyAuthority(state.login.user.roles.split(","), [ROLES.AGENT, ROLES.LANDLORD])
    };
}

function Header(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <React.Fragment>
            <Navbar expand="md" className="navbar-housenos">
                <Brand />
                <NavbarToggler onClick={() => setIsNavOpen(!isNavOpen)} />

                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className="mr-auto">
                        {props.isAuthenticated && <MenuItem to='/dashboard' title='Dashboard' />}
                        {props.canListProperty && <MenuItem to='/properties' title='My Properties' />}
                        <MenuItem to='/' title='Property Search' />
                        {props.isAuthenticated && <MenuItem to='/viewings' title='Viewings' />}
                    </Nav>

                    <Nav navbar className="ml-auto">
                        <AccountMenu isAuthenticated={props.isAuthenticated} user={props.user} />
                    </Nav>

                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default connect(mapStateToProps, null)(Header);