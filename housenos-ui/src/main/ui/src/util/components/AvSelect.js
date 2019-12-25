import React from 'react';
import { InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function renderInput(props) {
    return (
        <React.Fragment>
            <AvField
                type="select"
                value={props.value}
                name={props.name}
                className="form-control"
                onChange={props.onChange}
                validate={props.validate}
            >
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>{option.display}</option>
                ))}
            </AvField>
        </React.Fragment>
    );
}

const AvSelect = (props) => {
    return (
        <React.Fragment>
            <AvGroup>
                <Label className="mb-0" for={props.name} hidden={props.hideLabel}>
                    {props.label}
                </Label>
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
            </AvGroup>
        </React.Fragment>
    );
}

AvSelect.propTypes = {
    addonType: PropTypes.oneOf(['prepend', 'append']),
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    hideLabel: PropTypes.bool.isRequired,
}

export default AvSelect;