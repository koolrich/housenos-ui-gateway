import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {InputGroup, InputGroupAddon, Button, Form, Input } from 'reactstrap';
import './index.css';

function PropertyCard(props) {
    return(
        <React.Fragment>
            <img src="someimg.jpg" />
            <h3>Buy a home</h3>
            <p> Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else</p>
            <Button color="primary">Search homes</Button>
        </React.Fragment>
    )
}
export default PropertyCard;