import React from 'react';
import {
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown
} from 'reactstrap';

import { MenuItem } from './MenuItem';

const accountsMenuAnonymous = (
    <>
        <MenuItem to='/register' icon='user-plus' title='Sign up' />
        <MenuItem to='/login' icon='sign-in-alt' title='Login' />
    </>
);

const accountsMenuAuthenticated = (user) => (
    <>
        <UncontrolledDropdown nav>
            <DropdownToggle nav>
                <div className="avatar-circle">
                    <span className="initials">{getInitials(user)}</span>
                </div>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-right">
                <MenuItem to='/' icon='user' title='Profile' mainMenu={false} />
                <MenuItem to='/' icon='cog' title='Settings' mainMenu={false} />
                <DropdownItem divider />
                <MenuItem to='/' icon='power-off' title='Logout' mainMenu={false} />
            </DropdownMenu>
        </UncontrolledDropdown>
    </>
);

/**
 * Returns the user's initials using first name and last name if available
 * if not available then returns first letter of email
 * @param {*} user 
 */
function getInitials(user) {
    if (user.firstName && user.lastName) {
        return user.firstName.charAt(0) + user.lastName.charAt(0);
    }
    return user.email.charAt(0);
}

export const AccountMenu = ({ isAuthenticated = false, user }) => (
    <>
        {isAuthenticated ? accountsMenuAuthenticated(user) : accountsMenuAnonymous}
    </>
);

export default AccountMenu;