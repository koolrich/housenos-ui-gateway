import React, { useEffect } from 'react';
import { Card, CardBody, Row, Button, Container, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SignupSuccess = (props) => {

    useEffect(() => {
        document.body.style.backgroundColor = "#0747A6";
    }, []);

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md="6">
                    <Card>
                        <CardBody>
                            <Row className="justify-content-center">
                                <FontAwesomeIcon icon="check-circle" size="5x" className="text-success" />
                            </Row>
                            <Row className="mt-4 justify-content-center">
                                <h4>You have signed up successfully!</h4>
                                <p className="mt-3">Please check your email to activate your account.</p>
                                <p className="mt-1">Thanks for choosing Housenos</p>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignupSuccess;