import React, { useState, useEffect } from 'react';
import {
    Card, CardBody, CardTitle, Form, FormGroup, Row, Col, FormText, Button, Container
} from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FEDERAL_STATES } from '../../service/refdata/FederalStates';
import Select from '../../util/components/Select';
import Email from '../../util/components/Email';
import Password from '../../util/components/Password';
import Telephone from '../../util/components/Telephone';
import Text from '../../util/components/Text';
import Checkbox from '../../util/components/Checkbox';
import AlertMessage from '../../util/components/Alert';

import useForm from '../../util/hooks/Forms';
import { doSignup, doReset } from './SignupActions';

const Signup = (props) => {
    const formState = {
        firstName: {
            value: '', valid: true, touched: false, errorMessage: '', hide: true,
            validationRules: {
                isRequired: true,
                minLength: 25
            }
        },
        lastName: {
            value: '', valid: true, touched: false, errorMessage: '', hide: true,
            validationRules: {
                isRequired: true,
                minLength: 25
            }
        },
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
        },
        phone: {
            value: '', valid: true, touched: false, errorMessage: '', hide: true,
            validationRules: {
                isRequired: true
            }
        },
        role: {
            value: '', valid: true, touched: false, errorMessage: '', hide: true,
            validationRules: {
                isRequired: true
            },
            options: [{ value: '', display: 'Select your professional category' },
            { value: 'Landlord', display: 'Landlord' },
            { value: 'Agent', display: 'Real Estate Agent/Broker' }]
        }
    }

    const onSubmit = () => {
        const user = {
            email: formFields.email.value,
            password: formFields.password.value,
            firstName: formFields.firstName.value,
            lastName: formFields.lastName.value,
            role: formFields.role.value
        }
        console.log("User object: " + JSON.stringify(user));
        props.doSignup(user);
    }

    const onDismissAlert = () => {
        props.doReset();
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#0747A6";

        return () => {
            props.doReset();
        };  
    }, []);

    const toggleDisplayRoleFields = (event) => {
        setDisplayRoleFields(event.target.checked);
        for (let field in formFields) {
            const formField = formFields[field];
            if (formField.hide !== undefined) {
                formField.hide = displayRoleFields;
                //reset validation
                formField.valid = true;
            }
        }
        setFormFields(formFields)
    }

    const [displayRoleFields, setDisplayRoleFields] = useState(false)

    const { formFields, setFormFields, handleChange, handleSubmit } = useForm(onSubmit, formState);

    return (
        <>
            {props.signupSuccess ? <Redirect to="/signup-success" /> : null}

            <Container>
                <Row className="justify-content-center mt-5">
                    <img className="mr-1" src="assets/images/housenos-logo.jpg" width="50" height="40" alt="" />
                    <h1 className="font-weight-bold text-white">Housenos</h1>
                </Row>

                <Row className="justify-content-center mt-3">
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">Sign up for your account</CardTitle>
                                <Form onSubmit={handleSubmit}>
                                    {props.formErrorMessage &&
                                        <AlertMessage type="danger"
                                            visible={true}
                                            onDismiss={onDismissAlert}
                                            errorMessage={props.formErrorMessage} />}

                                    <Email name="email" value={formFields.email.value}
                                        placeholder="Email address"
                                        title="Email"
                                        hideLabel={true}
                                        onChange={handleChange}
                                        addonType="prepend"
                                        icon="envelope"
                                        valid={formFields.email.valid}
                                        errorMessage={formFields.email.errorMessage}
                                    />

                                    <Password name="password" value={formFields.password.value}
                                        placeholder="Password"
                                        title="Password"
                                        hideLabel={true}
                                        onChange={handleChange}
                                        addonType="prepend"
                                        icon="lock"
                                        valid={formFields.password.valid}
                                        errorMessage={formFields.password.errorMessage}
                                    />

                                    <Checkbox name="professional"
                                        title="I am a landlord or industry professional"
                                        onChange={toggleDisplayRoleFields} />

                                    {displayRoleFields &&
                                        <div>
                                            <Select name="role"
                                                value={formFields.role.value}
                                                options={formFields.role.options}
                                                onChange={handleChange}
                                                withIcon={true}
                                                addonType="prepend"
                                                icon="id-card"
                                                valid={formFields.role.valid}
                                                errorMessage={formFields.role.errorMessage}
                                            />
                                            <Row form>
                                                <Col md={6}>
                                                    <Text name="firstName" value={formFields.firstName.value}
                                                        placeholder="First name"
                                                        title="First name"
                                                        hideLabel={true}
                                                        onChange={handleChange}
                                                        addonType="prepend"
                                                        icon="user"
                                                        valid={formFields.firstName.valid}
                                                        errorMessage={formFields.firstName.errorMessage}
                                                    />
                                                </Col>

                                                <Col md={6}>
                                                    <Text name="lastName" value={formFields.lastName.value}
                                                        placeholder="Last name"
                                                        title="Last name"
                                                        hideLabel={true}
                                                        onChange={handleChange}
                                                        addonType="prepend"
                                                        icon="user"
                                                        valid={formFields.lastName.valid}
                                                        errorMessage={formFields.lastName.errorMessage}
                                                    />
                                                </Col>

                                            </Row>

                                            <Telephone name="phone" value={formFields.phone.value}
                                                placeholder="Phone number"
                                                title="Phone number"
                                                hideLabel={true}
                                                onChange={handleChange}
                                                addonType="prepend"
                                                icon="phone"
                                                valid={formFields.phone.valid}
                                                errorMessage={formFields.phone.errorMessage}
                                            />

                                        </div>}

                                    <FormGroup>
                                        <FormText>By signing up, you confirm that you've read and accepted our <a href="">User Notice</a> and <a href="">Privacy Policy</a></FormText>
                                    </FormGroup>

                                    <Button color="primary" block>Sign up</Button>
                                </Form>
                            </CardBody>

                            <div className="border-top card-body text-center">
                                Already have a Housenos account? <Link to="/login">Login</Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    doSignup: (user) => dispatch(doSignup(user)),
    doReset: () => dispatch(doReset())
});

function mapStateToProps(state) {
    return {
        formErrorMessage: state.signup.formErrorMessage,
        signupSuccess: state.signup.signupSuccess
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);