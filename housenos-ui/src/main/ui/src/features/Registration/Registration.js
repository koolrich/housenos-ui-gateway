import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, Form, FormGroup, FormFeedback, Row, Col, Input, InputGroup, InputGroupAddon,
    FormText, Button, Label
} from 'reactstrap';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FEDERAL_STATES } from '../../repository/refdata/FederalStates';
import SelectInput from '../../util/components/SelectInput'

class Registration extends Component {

    constructor() {
        super();

        this.state = {
            formControls: {
                federalState: {
                    value: '',
                    options: [{ value: '', display: 'Select your state' }].concat(FEDERAL_STATES.map(federalState => { return { value: federalState.name, display: federalState.name } }))
                },
                town: {
                    value: '',
                    options: []
                }
            },
            townOptions: []
        };

        this.InputChangeHandler = this.InputChangeHandler.bind(this);
    }

    InputChangeHandler = event => {
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
                                        <Col>
                                            <p>I am registering as</p>
                                        </Col>
                                        <Col>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" id="role" name="role" /> User
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" id="role" name="role" /> Agent
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="user" /></InputGroupAddon>
                                                    <Input type="text" aria-label="Enter first name" placeholder="First name" />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="user" /></InputGroupAddon>
                                                    <Input type="text" aria-label="Enter last name" placeholder="Last name" />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="envelope" /></InputGroupAddon>
                                            <Input type="text" aria-label="Enter your email" placeholder="Email" />
                                            <Col sm={12}>
                                                <FormText>We'll never share your email with anyone else</FormText>
                                            </Col>
                                        </InputGroup>
                                    </FormGroup>

                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="lock" /></InputGroupAddon>
                                                    <Input type="password" aria-label="Enter your password" placeholder="Password" />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="lock" /></InputGroupAddon>
                                                    <Input type="text" aria-label="Confirm your password" placeholder="Confirm password" />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="phone" /></InputGroupAddon>
                                            <Input type="tel" aria-label="Enter your phone number" placeholder="Phone" />
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="briefcase" /></InputGroupAddon>
                                            <Input type="tel" aria-label="Enter your business name" placeholder="Business name" />
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="address-card" /></InputGroupAddon>
                                            <Input type="tel" aria-label="Enter your address1" placeholder="Address 1" />
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon className="input-group-text" addonType="prepend"><FontAwesomeIcon icon="address-card" /></InputGroupAddon>
                                            <Input type="tel" aria-label="Enter your address line 2" placeholder="Address 2" />
                                        </InputGroup>
                                    </FormGroup>

                                    <Row form>
                                        <Col md={6}>
                                            <SelectInput name="federalState"
                                                value={this.state.formControls.federalState.value}
                                                options={this.state.formControls.federalState.options}
                                                onChange={this.InputChangeHandler}
                                                withIcon={true}
                                                addonType="prepend"
                                                icon="city"                                          />
                                        </Col>

                                        <Col md={6}>
                                            <SelectInput name="town"
                                                value={this.state.formControls.town.value}
                                                options={this.state.townOptions}
                                                onChange={this.InputChangeHandler}
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