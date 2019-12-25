import React from 'react';
import { InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { AvGroup, AvField } from 'availity-reactstrap-validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function renderInput(props) {
    return (
        <React.Fragment>
            <AvField type="text"
                name={props.name}
                className="form-control"
                id={props.name}
                value={props.value}
                placeholder={props.placeholder}
                validate={props.validate} />
        </React.Fragment>
    );
}

const AvText = (props) => {
    return (
        <React.Fragment>
            <AvGroup>
                <Label className="mb-0" for={props.name} hidden={props.hideLabel}>
                    {props.label}
                </Label>

                {props.icon ?
                    <InputGroup>
                        <InputGroupAddon className="input-group-text" addonType={props.addonType}>
                            <FontAwesomeIcon icon={props.icon} />
                        </InputGroupAddon>
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

Text.propTypes = {
    addonType: PropTypes.oneOf(['prepend', 'append']),
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    hideLabel: PropTypes.bool.isRequired,
}

export default AvText;