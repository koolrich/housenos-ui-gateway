import React from 'react';
import { Input, InputGroup, InputGroupAddon, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function renderInput(props) {
    return (
        <Input type="select" value={props.value} onChange={props.onChange} name={props.name}>
            {props.options.map(option => (
                <option key={option.value} value={option.value}>{option.display}</option>
            ))}
        </Input>
    );
}

const SelectInput = (props) => {
    return (
        <React.Fragment>
            <FormGroup>
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

SelectInput.propTypes = {
    withIcon: PropTypes.bool.isRequired,
    addonType: PropTypes.oneOf(['prepend', 'append']),
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default SelectInput;