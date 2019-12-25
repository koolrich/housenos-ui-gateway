import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Card, CardImg, CardBody, CardTitle, Badge } from 'reactstrap';
import PageHeader from '../Layout/PageHeader';
import Text from '../../util/components/Text';
import AddPropertyModal from './AddPropertyModal';


function MyProperties(props) {
    const [modal, setModal] = useState(false);

    const [isNew, setIsNew] = useState(!props.match.params);

    const toggle = () => setModal(!modal);

    return (
        <Container>
            <PageHeader pageTitle="My Properties" />
            <Link to="/properties/listing">+Add property</Link>
            <Link onClick={toggle}>+Add property</Link><Badge>(2)</Badge>
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
            <AddPropertyModal isOpen={modal} toggle={toggle} isNew={isNew} />

        </Container>
    )
}

export default MyProperties;