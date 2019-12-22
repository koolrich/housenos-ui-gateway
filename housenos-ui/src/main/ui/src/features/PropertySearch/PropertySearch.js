import React from 'react';
import './index.css';
import { Badge } from 'reactstrap';
import {InputGroup, InputGroupAddon, Button, Form, Input } from 'reactstrap';
import { Container, Row, Col} from 'reactstrap';
import {Card, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody} from 'reactstrap';
import PropertyCard from '../../util/components/PropertyCard/PropertyCard';

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
                            <InputGroup>
                                <Input placeholder="Enter an address, town or city"/>
                                <InputGroupAddon addonType="append">
                                <Button color="secondary">Go!</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </Col>      
                </Row>  
            </div> 


        <Container className="pt-5">
            <Row>
                <Col>
                    <PropertyCard />
                </Col>
                <Col>
                    <PropertyCard />
                </Col>
                <Col>
                    <PropertyCard />
                </Col>
            </Row>       
        </Container>      
        
        <CardGroup className="pt-5">
                <Card>
                    <CardImg top width="100%" src="/assets/images/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Buy a home</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</CardText>
                        <Button color="primary">Search homes</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/images/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Buy a home</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</CardText>
                        <Button color="primary">Search homes</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="/assets/images/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Buy a home</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</CardText>
                        <Button color="primary">Search homes</Button>
                    </CardBody>
                </Card>
            </CardGroup> 

        </div>
        
    )
}

export default PropertySearch;