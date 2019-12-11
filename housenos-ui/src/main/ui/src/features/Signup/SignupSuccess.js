import React, { useEffect } from 'react';
import { Card, CardBody, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SignupSuccess = (props) => {

    useEffect(() => {
        document.body.style.backgroundColor = "#0747A6";
    }, []);

    const backToHomePage = () => {
        props.history.push('/');
    }

    return (
        <div className="container">
            <header className="row justify-content-center register-title">
                <img className="housenos-img" src="assets/images/housenos-logo.jpg" width="50" height="40" alt="" />
                <h1>Housenos</h1>
            </header>

            <div className="row justify-content-center register-box">
                <div className="col-md-6">
                    <Card>
                        <CardBody>
                            <Row className="justify-content-center">
                                <FontAwesomeIcon icon="check-circle" size="5x" className="text-success" />
                            </Row>

                            <Row className="mt-4 justify-content-center">
                                <h3>You have signed up successfully!</h3>
                                <p className="mt-4">Please check your email to activate your account.</p>
                                <p className="mt-1">Thanks for choosing Housenos</p>
                            </Row>

                            <Row className="mt-4 justify-content-center">
                                <Button outline color="success" onClick={backToHomePage}>Continue to homepage</Button>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default SignupSuccess;