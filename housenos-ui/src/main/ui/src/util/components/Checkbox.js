import React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';


const Checkbox = (props) => {
    return (
        <React.Fragment>
            <FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id={props.name} name={props.name} checked={props.value}
                            onChange={props.onChange} />{' '}
                        {props.title}
                    </Label>
                </FormGroup>
            </FormGroup>
        </React.Fragment>
    );
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Checkbox;