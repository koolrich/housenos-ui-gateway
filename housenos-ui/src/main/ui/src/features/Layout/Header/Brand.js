import React from 'react';

import { NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const Brand = props => (
    <NavbarBrand tag={Link} to="/" className="mr-5">
        <BrandIcon />
    </NavbarBrand>
);

export const BrandIcon = props => (
    <div {...props} >
        <img src="assets/images/housenos-logo.jpg" height="35" width="45" alt="Housenos" />
        <span className="brand-title"> Housenos</span>
    </div>
);