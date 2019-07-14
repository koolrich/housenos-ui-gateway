import React from 'react';
import { Input, InputGroup, InputGroupAddon, FormGroup, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function renderInput(props) {
    return (
        <Input type={props.type} name={props.name} id={props.name} value={props.value} placeholder={props.placeholder}
            onChange={props.onChange} />
    );
}

const CommonInput = (props) => {
    return (
        <React.Fragment>
            <FormGroup>
                <Label for={props.name} hidden={props.hideLabel}>{props.title}</Label>

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
            </FormGroup>
        </React.Fragment>
    );
}

CommonInput.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email', 'tel', 'password']).isRequired,
    addonType: PropTypes.oneOf(['prepend', 'append']),
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    title: PropTypes.string.isRequired, 
    hideLabel: PropTypes.bool.isRequired
}

export default CommonInput;