import React from 'react';
import './index.css';
import { Badge } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

function PropertySearch(props) {
    return(
        <div className="container">
            <div className="searchContainer">
                <div className="text-center">
                    <h1>Reimagine home <Badge color="danger">New</Badge></h1>
                    <h3>Let's help you find your dream home</h3>
                </div>
                <Row className="pt-5">
                    <Col m="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                            <Input placeholder="Enter an address, town or city" bsSize="default" />
                        </Form>
                    </Col>      
                </Row>  
            </div>        
        </div>
        
    )
}

export default PropertySearch;