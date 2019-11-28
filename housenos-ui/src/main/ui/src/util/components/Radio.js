import React from 'react';
import { Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const Radio = (props) => {
    return (
        <React.Fragment>
            <FormGroup>
                {props.options.map(option => (
                    <FormGroup check inline={props.displayInline} key={option.value}>
                        <Label check>
                            <Input type="radio" name={props.name}
                                value={option.value}
                                checked={props.selectedOption === option.value}
                                onChange={props.onChange} /> {option.display}
                        </Label>
                    </FormGroup>
                ))}
            </FormGroup>
        </React.Fragment>
    );
}

Radio.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    displayInline: PropTypes.bool,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.any
}

export default Radio;