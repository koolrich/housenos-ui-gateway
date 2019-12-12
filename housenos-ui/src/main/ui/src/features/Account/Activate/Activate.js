import React, { useEffect } from 'react';
import { Card, CardBody, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { doActivate, doReset } from './ActivateAction';

const successDisplay = (
    <Card>
        <CardBody>
            <Row className="justify-content-center">
                <FontAwesomeIcon icon="check-circle" size="5x" className="text-success" />
            </Row>
            <Row className="mt-4 justify-content-center">
                <h4>Great news! Your account has been activated!</h4>
            </Row>
            <Row className="mt-3 justify-content-center">
                <Link to="/login" className="btn btn-outline-success">
                    Continue to login
                </Link>
            </Row>
        </CardBody>
    </Card>
);

const failureDisplay = (
    <Card>
        <CardBody>
            <Row className="justify-content-center">
                <FontAwesomeIcon icon="exclamation-circle" size="5x" className="text-danger" />
            </Row>
            <Row className="mt-4 justify-content-center">
                <h4>Your account could not be activated!</h4>
                <p className="mt-2">Please use the registration form to sign up</p>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Link to="/signup" className="btn btn-outline-success">
                    Sign up
                </Link>
            </Row>
        </CardBody>
    </Card>
);

const getUrlParameter = (name, search) => {
    const url = new URL(`http://localhost${search}`); // using a dummy url for parsing
    return url.searchParams.get(name) || '';
}

const Activate = (props) => {
    useEffect(() => {
        document.body.style.backgroundColor = "#0747A6";
        const key = getUrlParameter('key', props.location.search);
        console.log("The key is: " + key)
        props.doActivate(key);

        return () => {
            props.doReset();
        };
    }, []);

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md="6">
                    {props.activationSuccess ? successDisplay : undefined}
                    {props.activationFailure ? failureDisplay : undefined}
                </Col>
            </Row>
        </Container>
    );
}

const mapDispatchToProps = dispatch => ({
    doActivate: (key) => dispatch(doActivate(key)),
    doReset: () => dispatch(doReset())
});

function mapStateToProps(state) {
    return {
        activationSuccess: state.activate.activationSuccess,
        activationFailure: state.activate.activationFailure
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Activate);