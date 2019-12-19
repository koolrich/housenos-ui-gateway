import React from 'react';
import { Input, InputGroup, InputGroupAddon, FormGroup, FormFeedback, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function renderInput(props) {
    return (
        <React.Fragment>
            <Input type="select" value={props.value} onChange={props.onChange} name={props.name} invalid={props.valid === false ? true : false}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>{option.display}</option>
                ))}
            </Input>
            <FormFeedback>{props.errorMessage}</FormFeedback>
        </React.Fragment>
    );
}

const Select = (props) => {
    return (
        <React.Fragment>
            <FormGroup>
            <Label className="mb-0" for={props.name} hidden={props.hideLabel}>{props.title}</Label>
                {props.withIcon === true ?
                    <InputGroup>
                        <InputGroupAddon className="input-group-text" addonType={props.addonType}><FontAwesomeIcon icon={props.icon} /></InputGroupAddon>
                        {renderInput(props)}
                    </InputGroup>
                    :
                    <React.Fragment>
                        {renderInput(props)}
                    </React.Fragment>
                }
            </FormGroup>
        </React.Fragment>
    );
}

Select.propTypes = {
    addonType: PropTypes.oneOf(['prepend', 'append']),
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    title: PropTypes.string,
    hideLabel: PropTypes.bool.isRequired,
    valid: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default Select;