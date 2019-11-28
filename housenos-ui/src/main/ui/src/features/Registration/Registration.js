import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, Form, FormGroup, Row, Col, FormText, Button
} from 'reactstrap';

import './index.css';
import { FEDERAL_STATES } from '../../service/refdata/FederalStates';
import Select from '../../util/components/Select';
import Email from '../../util/components/Email';
import Password from '../../util/components/Password';
import Telephone from '../../util/components/Telephone';
import Text from '../../util/components/Text';
import Checkbox from '../../util/components/Checkbox';
import AlertMessage from '../../util/components/Alert';

import { validate } from '../../util/validators/InputValidator';
import UserRepository from '../../service/repository/UserRepository';

class Registration extends Component {

    constructor() {
        super();

        this.state = {
            formControls: {
                firstName: {
                    value: '', valid: true, touched: false, errorMessage: '', hideable: true,
                    validationRules: {
                        isRequired: true,
                        minLength: 25
                    }
                },
                lastName: {
                    value: '', valid: true, touched: false, errorMessage: '', hideable: true,
                    validationRules: {
                        isRequired: true,
                        minLength: 25
                    }
                },
                email: {
                    value: '', valid: true, touched: false, errorMessage: '', hideable: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: true
                    }
                },
                password: {
                    value: '', valid: true, touched: false, errorMessage: '', hideable: false,
                    validationRules: {
                        isRequired: true
                    }
                },
                phone: {
                    value: '', valid: true, touched: false, errorMessage: '', hideable: true,
                    validationRules: {
                        isRequired: true
                    }
                },
                role: {
                    value: '', valid: true, touched: false, errorMessage: '', hideable: true,
                    validationRules: {
                        isRequired: true
                    },
                    options: [{ value: '', display: 'Select your professional category' },
                    { value: 'Landlord', display: 'Landlord' },
                    { value: 'Agent', display: 'Real Estate Agent/Broker' }]
                }
            },
            hideLabel: true,
            displayProfessionalFields: false,
            formErrorMessage: '',
            showAlert: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleDisplayProfessionalFields = this.toggleDisplayProfessionalFields.bind(this);
        this.onDismissAlert = this.onDismissAlert.bind(this);
        this.userRepository = new UserRepository();
    }

    onChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedFormControls = {
            ...this.state.formControls
        };
        const updatedFormControl = {
            ...updatedFormControls[name]
        };
        updatedFormControl.value = value;
        updatedFormControl.touched = true;

        const validatedFormControl = this.validateInput(value, updatedFormControl);

        updatedFormControls[name] = validatedFormControl;

        this.setState({
            formControls: updatedFormControls
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        const formControls = {
            ...this.state.formControls
        };

        let isFormValid = true;

        for (let control in formControls) {
            const formControl = formControls[control];
            if (!formControl.hideable || (formControl.hideable && this.state.displayProfessionalFields)) {
                const validatedFormControl = this.validateInput(formControl.value, formControl)
                formControls[control] = validatedFormControl;
                isFormValid = formControls[control].valid && isFormValid;
            }
        }

        this.setState({
            formControls: formControls
        });

        if (isFormValid) {

            const user = {
                email: formControls.email.value,
                password: formControls.password.value,
                firstName: formControls.firstName.value,
                lastName: formControls.lastName.value,
                role: formControls.role.value
            }

            this.userRepository.registerUser(user).then(response => {
                console.log(response.data)
            })
                .catch(error => {
                    console.log(error.response.data);
                    this.setState({
                        formErrorMessage: error.response.data.detail,
                        showAlert: true
                    });
                });

        }

    }

    validateInput = (value, formControl) => {
        const errorMessage = validate(value, formControl.validationRules)

        if (errorMessage) {
            formControl.valid = false;
            formControl.errorMessage = errorMessage;
        } else {
            formControl.valid = true;
        }

        return formControl;
    }

    toggleDisplayProfessionalFields = (event) => {
        this.setState({
            displayProfessionalFields: event.target.checked
        });
    }

    onDismissAlert = () => {
        this.setState({
            showAlert: false
        });
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#0747A6";
    }

    render() {
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
                                <CardTitle className="text-center">Sign up for your account</CardTitle>
                                <Form>
                                    <AlertMessage type="danger" visible={this.state.showAlert} onDismiss={this.onDismissAlert} errorMessage={this.state.formErrorMessage} />

                                    <Email name="email" value={this.state.formControls.email.value}
                                        placeholder="Email address"
                                        title="Email"
                                        hideLabel={this.state.hideLabel}
                                        onChange={this.onChange}
                                        addonType="prepend"
                                        icon="envelope"
                                        valid={this.state.formControls.email.valid}
                                        errorMessage={this.state.formControls.email.errorMessage}
                                    />

                                    <Password name="password" value={this.state.formControls.password.value}
                                        placeholder="Password"
                                        title="Password"
                                        hideLabel={this.state.hideLabel}
                                        onChange={this.onChange}
                                        addonType="prepend"
                                        icon="lock"
                                        valid={this.state.formControls.password.valid}
                                        errorMessage={this.state.formControls.password.errorMessage}
                                    />

                                    <Checkbox name="professional" value={this.state.showProfessional}
                                        title="I am a landlord or industry professional"
                                        onChange={this.toggleDisplayProfessionalFields} />

                                    <div className={!this.state.displayProfessionalFields ? 'hidden' : ''}>
                                        <Select name="role"
                                            value={this.state.formControls.role.value}
                                            options={this.state.formControls.role.options}
                                            onChange={this.onChange}
                                            withIcon={true}
                                            addonType="prepend"
                                            icon="id-card"
                                            valid={this.state.formControls.role.valid}
                                            errorMessage={this.state.formControls.role.errorMessage}
                                        />
                                        <Row form>
                                            <Col md={6}>
                                                <Text name="firstName" value={this.state.formControls.firstName.value}
                                                    placeholder="First name"
                                                    title="First name"
                                                    hideLabel={this.state.hideLabel}
                                                    onChange={this.onChange}
                                                    addonType="prepend"
                                                    icon="user"
                                                    valid={this.state.formControls.firstName.valid}
                                                    errorMessage={this.state.formControls.firstName.errorMessage}
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <Text name="lastName" value={this.state.formControls.lastName.value}
                                                    placeholder="Last name"
                                                    title="Last name"
                                                    hideLabel={this.state.hideLabel}
                                                    onChange={this.onChange}
                                                    addonType="prepend"
                                                    icon="user"
                                                    valid={this.state.formControls.lastName.valid}
                                                    errorMessage={this.state.formControls.lastName.errorMessage}
                                                />
                                            </Col>

                                        </Row>

                                        <Telephone name="phone" value={this.state.formControls.phone.value}
                                            placeholder="Phone number"
                                            title="Phone number"
                                            hideLabel={this.state.hideLabel}
                                            onChange={this.onChange}
                                            addonType="prepend"
                                            icon="phone"
                                            valid={this.state.formControls.phone.valid}
                                            errorMessage={this.state.formControls.phone.errorMessage}
                                        />

                                    </div>

                                    <FormGroup>
                                        <FormText>By signing up, you confirm that you've read and accepted our <a href="">User Notice</a> and <a href="">Privacy Policy</a></FormText>
                                    </FormGroup>

                                    <Button color="primary" block onClick={this.onSubmit}>Sign up</Button>

                                </Form>
                            </CardBody>

                            <div className="border-top card-body text-center">
                                Already have a Housenos account? <a href="">Login</a>
                            </div>
                        </Card>

                    </div>

                </div>

            </div>

        );
    }
}

export default Registration;