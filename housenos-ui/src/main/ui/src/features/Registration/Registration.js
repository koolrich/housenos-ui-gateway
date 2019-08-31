import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, Form, FormGroup, Row, Col, FormText, Label, Input
} from 'reactstrap';
import './index.css';
import { FEDERAL_STATES } from '../../repository/refdata/FederalStates';
import SelectInput from '../../util/components/SelectInput';
import CommonInput from '../../util/components/CommonInput';
import RadioInput from '../../util/components/RadioInput';
import CommonButton from '../../util/components/CommonButton';
import Checkbox from '../../util/components/Checkbox';

import validate from '../../util/validators/InputValidator';

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
                        isRequired: true
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
            displayProfessionalFields: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleDisplayProfessionalFields = this.toggleDisplayProfessionalFields.bind(this);
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

        console.log('Is Form Valid: ' + isFormValid);
        //console.log(JSON.stringify(this.state.formControls));
        event.preventDefault();
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

                                    <CommonInput type="email" name="email" value={this.state.formControls.email.value}
                                        placeholder="Email address"
                                        title="Email"
                                        hideLabel={this.state.hideLabel}
                                        onChange={this.onChange}
                                        addonType="prepend"
                                        icon="envelope"
                                        valid={this.state.formControls.email.valid}
                                        errorMessage={this.state.formControls.email.errorMessage}
                                    />

                                    <CommonInput type="password" name="password" value={this.state.formControls.password.value}
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
                                        <SelectInput name="role"
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
                                                <CommonInput type="text" name="firstName" value={this.state.formControls.firstName.value}
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
                                                <CommonInput type="text" name="lastName" value={this.state.formControls.lastName.value}
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

                                        <CommonInput type="tel" name="phone" value={this.state.formControls.phone.value}
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

                                    <CommonButton color="primary" block onClick={this.onSubmit}>Sign up</CommonButton>

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