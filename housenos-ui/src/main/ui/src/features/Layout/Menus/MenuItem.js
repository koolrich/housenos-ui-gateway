import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { NavItem, NavLink, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuItem = ({ to, icon, title, mainMenu = true }) => (
    <>
        {mainMenu ? mainMenuItem(to, icon, title) : subMenuItem(to, icon, title)}
    </>
);

/**
 * Used to generate the individual menu items on the main menu
 * @param {*} to 
 * @param {*} icon 
 * @param {*} title 
 */
const mainMenuItem = (to, icon, title) => (
    <NavItem>
        <NavLink tag={Link} className="nav-link" to={to}>
            {icon && <FontAwesomeIcon icon={icon} className="fa-fw" />}
            <span> {title}</span>
        </NavLink>
    </NavItem>
);

/**
 * Used to generate the menu items in a drop down menu
 * @param {*} to 
 * @param {*} icon 
 * @param {*} title 
 */
const subMenuItem = (to, icon, title) => (
    <DropdownItem tag={Link} to={to}>
        {icon && <FontAwesomeIcon icon={icon} className="fa-fw" />}
        <span> {title}</span>
    </DropdownItem>
);

export default MenuItem;