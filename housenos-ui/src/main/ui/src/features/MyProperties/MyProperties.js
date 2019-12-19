import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, CardImg, CardBody, CardTitle, Badge } from 'reactstrap';
import PageHeader from '../Layout/PageHeader';

function MyProperties(props) {
    return (
        <Container>
            <PageHeader pageTitle="My Properties" />
            <Link to="/properties/listing">+Add property</Link>
            <Row className="text-center mt-4">
                <div className="col-lg-6 col-md-6 col-6 mb-2">
                    <Card className="property-card">
                        <CardImg />
                        <CardBody>
                            <CardTitle className="float-left">Title</CardTitle>
                        </CardBody>
                    </Card>

                </div>

                <div className="col-lg-6 col-md-6 col-6 mb-2">
                    <Card className="property-card">
                        <CardImg />
                        <CardBody>
                            <CardTitle className="float-left">Title</CardTitle>
                        </CardBody>
                    </Card>

                </div>

            </Row>



            



        </Container>
    )
}

export default MyProperties;