import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, DropdownToggle,
    Dropdown, DropdownMenu, DropdownItem
} from 'reactstrap';

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
                        <img src="assets/images/housenos-logo.jpg" height="30" width="41" alt="Housenos" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'>
                                    <i className="fa fa-fw fa-home" aria-hidden="true"></i>Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>
                                    <i className="fa fa-fw fa-university" aria-hidden="true"></i>My Properties
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'>
                                    <i className="fa fa-fw fa-search-plus" aria-hidden="true"></i>Property Search
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'>
                                    <i className="fa fa-fw fa-street-view" aria-hidden="true"></i>Viewings
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
                                    <DropdownItem tag="a" href="/"><i className="fa fa-fw fa-user" aria-hidden="true"></i>Profile</DropdownItem>
                                    <DropdownItem tag="a" href="/"><i className="fa fa-fw fa-cog" aria-hidden="true"></i>Settings</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem tag="a" href="/"><i className="fa fa-fw fa-power-off" aria-hidden="true"></i>Logout</DropdownItem>
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