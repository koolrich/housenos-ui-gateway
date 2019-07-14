import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, Form, FormGroup, FormFeedback, Row, Col,
    FormText, Button, Label
} from 'reactstrap';
import './index.css';
import { FEDERAL_STATES } from '../../repository/refdata/FederalStates';
import SelectInput from '../../util/components/SelectInput';
import CommonInput from '../../util/components/CommonInput';
import RadioInput from '../../util/components/RadioInput';

class Registration extends Component {

    constructor() {
        super();

        this.state = {
            formControls: {
                firstName: {
                    value: ''
                },
                lastName: {
                    value: ''
                },
                email: {
                    value: ''
                },
                password: {
                    value: ''
                },
                confirmPassword: {
                    value: ''
                },
                phone: {
                    value: ''
                },
                businessName: {
                    value: ''
                },
                address1: {
                    value: ''
                },
                address2: {
                    value: ''
                },
                federalState: {
                    value: '',
                    options: [{ value: '', display: 'Select your state' }].concat(FEDERAL_STATES.map(federalState => { return { value: federalState.name, display: federalState.name } }))
                },
                town: {
                    value: ''
                },
                role: {
                    value:'',
                    options: [{ value: 'User', display: 'User' }, { value: 'Agent', display: 'Agent' }]
                }
            },
            townOptions: [],
            hideLabel: true
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name], value
                }
            }
        });

        if (name === 'federalState') {
            const townsForSelectedState = this.getTownsForState(value);

            this.setState({
                townOptions: [{ value: '', display: 'Select your town' }].concat(townsForSelectedState.map(town => { return { value: town, display: town } }))
            });
        }
    }

    getTownsForState = selectedFederalState => {
        if (selectedFederalState === '') {
            return [];
        }
        return FEDERAL_STATES.filter(federalState => federalState.name === selectedFederalState)[0].towns;
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
                                    <Row form>
                                       <Col sm={4}>
                                           <Label for="role">I am registering as</Label>
                                       </Col>
                                        <Col sm={8}>  
                                        <RadioInput name="role" displayInline={true}
                                        onChange={this.onChange} 
                                        options={this.state.formControls.role.options}
                                        selectedOption={this.state.formControls.role.selectedOption}/> 
                                        
                                        </Col>
                                    </Row>

                                    <Row form>
                                        <Col md={6}>
                                            <CommonInput type="text" name="firstName" value={this.state.formControls.firstName.value}
                                                placeholder="First name"
                                                title="First name"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="user"/>
                                        </Col>

                                        <Col md={6}>
                                        <CommonInput type="text" name="lastName" value={this.state.formControls.lastName.value}
                                                placeholder="Last name"
                                                title="Last name"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="user"/>
                                        </Col>

                                    </Row>

                                    <CommonInput type="email" name="email" value={this.state.formControls.email.value}
                                                placeholder="Email address"
                                                title="Email"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="envelope"/>

                                    <Row form>
                                        <Col md={6}>
                                        <CommonInput type="password" name="password" value={this.state.formControls.password.value}
                                                placeholder="Password"
                                                title="Password"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="lock"/>
                                        </Col>

                                        <Col md={6}>
                                        <CommonInput type="password" name="confirmPassword" value={this.state.formControls.confirmPassword.value}
                                                placeholder="Confirm password"
                                                title="Password"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="lock"/>
                                        </Col>
                                    </Row>

                                    <CommonInput type="tel" name="phone" value={this.state.formControls.phone.value}
                                                placeholder="Phone number"
                                                title="Phone number"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="phone"/>


                                    <CommonInput type="text" name="businessName" value={this.state.formControls.businessName.value}
                                                placeholder="Company name"
                                                title="Company name"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="briefcase"/>   

                                    <CommonInput type="text" name="address1" value={this.state.formControls.address1.value}
                                                placeholder="Address 1"
                                                title="Address 1"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="address-card"/>

                                    <CommonInput type="text" name="address2" value={this.state.formControls.address2.value}
                                                placeholder="Address 2"
                                                title="Address 2"
                                                hideLabel={this.state.hideLabel}
                                                onChange={this.onChange}
                                                addonType="prepend"
                                                icon="address-card"/>


                                    <Row form>
                                        <Col md={6}>
                                            <SelectInput name="federalState"
                                                value={this.state.formControls.federalState.value}
                                                options={this.state.formControls.federalState.options}
                                                onChange={this.onChange}
                                                withIcon={true}
                                                addonType="prepend"
                                                icon="city"                                          />
                                        </Col>

                                        <Col md={6}>
                                            <SelectInput name="town"
                                                value={this.state.formControls.town.value}
                                                options={this.state.townOptions}
                                                onChange={this.onChange}
                                                withIcon={true}
                                                addonType="prepend"
                                                icon="city"
                                            />
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <FormText>By signing up, you confirm that you've read and accepted our <a href="">User Notice</a> and <a href="">Privacy Policy</a></FormText>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button color="primary" block>Sign up</Button>
                                    </FormGroup>
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