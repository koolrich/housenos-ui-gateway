import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Form, Button, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { doLogin, doResetLogin } from './LoginActions';

import Email from '../../util/components/Email';
import Password from '../../util/components/Password';
import AlertMessage from '../../util/components/Alert';
import useForm from '../../util/hooks/Forms';

const Login = (props) => {
    const formState = {
        email: {
            value: '', valid: true, touched: false, errorMessage: '',
            validationRules: {
                isRequired: true,
                isEmail: true
            }
        },
        password: {
            value: '', valid: true, touched: false, errorMessage: '',
            validationRules: {
                isRequired: true
            }
        }
    };

    const onSubmit = () => {
        props.doLogin(formFields.email.value, formFields.password.value)
    }

    const onDismissAlert = () => {
        props.doResetLogin();
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#0747A6";
    }, [])

    const [formOptions, setFormOptions] = useState({ hideLabel: false })

    const { formFields, handleChange, handleSubmit } = useForm(onSubmit, formState);

    return (
        <>
            {props.isAuthenticated ? <Redirect to="/" /> : null}

            <Container>
                <Row className="justify-content-center mt-5">
                    <img className="housenos-img" src="assets/images/housenos-logo.jpg" width="50" height="40" alt="" />
                    <h1 className="font-weight-bold text-white">Housenos</h1>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col md="4">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Login to your account</CardTitle>
                                <Form onSubmit={handleSubmit}>
                                    {props.formErrorMessage &&
                                        <AlertMessage type="danger"
                                            visible={true}
                                            onDismiss={onDismissAlert}
                                            errorMessage={props.formErrorMessage} />}

                                    <Email name="email" value={formFields.email.value}
                                        placeholder="Email address"
                                        title="Email"
                                        hideLabel={formOptions.hideLabel}
                                        onChange={handleChange}
                                        addonType="prepend"
                                        icon="envelope"
                                        valid={formFields.email.valid}
                                        errorMessage={formFields.email.errorMessage}
                                    />

                                    <Password name="password" value={formFields.password.value}
                                        placeholder="Password"
                                        title="Password"
                                        hideLabel={formOptions.hideLabel}
                                        onChange={handleChange}
                                        addonType="prepend"
                                        icon="lock"
                                        valid={formFields.password.valid}
                                        errorMessage={formFields.password.errorMessage}
                                    />

                                    <Button color="primary" block active>Login</Button>

                                </Form>
                            </CardBody>

                            <div className="border-top card-body text-center">
                                Don't have account? <Link to="/signup">Sign up</Link> up for an account
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    doLogin: (username, password) => dispatch(doLogin(username, password)),
    doResetLogin: () => dispatch(doResetLogin())
});

function mapStateToProps(state) {
    return {
        formErrorMessage: state.login.formErrorMessage,
        isAuthenticated: state.login.isAuthenticated
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);