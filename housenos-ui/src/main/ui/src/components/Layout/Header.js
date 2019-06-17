import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, DropdownToggle,
    Dropdown, DropdownMenu, DropdownItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            dropdownOpen: false

        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="md" className="navbar-housenos">
                    <NavbarBrand className="mr-5" href="/">
                        <img src="assets/images/housenos-logo.jpg" height="35" width="45" alt="Housenos" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <FontAwesomeIcon icon="home" className="fa-fw" />Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>
                                    <FontAwesomeIcon icon="university" className="fa-fw" />My Properties
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'>
                                    <FontAwesomeIcon icon="search" className="fa-fw" />Property Search
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>
                                    <FontAwesomeIcon icon="street-view" className="fa-fw" />Viewings
                                    </NavLink>
                            </NavItem>
                        </Nav>

                        <Nav navbar className="ml-auto">
                            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                <DropdownToggle nav>
                                    <div className="avatar-circle">
                                        <span className="initials">RN</span>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-right">
                                    <DropdownItem tag="a" href="/"><FontAwesomeIcon icon="user" className="fa-fw"/>Profile</DropdownItem>
                                    <DropdownItem tag="a" href="/"><FontAwesomeIcon icon="cog" className="fa-fw" />Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem tag="a" href="/"><FontAwesomeIcon icon="power-off" className="fa-fw" />Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;