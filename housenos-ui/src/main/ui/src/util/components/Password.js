import React from 'react';
import { Input, InputGroup, InputGroupAddon, FormGroup, Label, FormFeedback } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function renderInput(props) {
    return (
        <React.Fragment>
            <Input type="password" name={props.name} id={props.name} value={props.value} placeholder={props.placeholder}
                onChange={props.onChange} invalid={props.valid === false ? true : false} />
            <FormFeedback>{props.errorMessage}</FormFeedback>
        </React.Fragment>
    );
}

const Password = (props) => {
    return (
        <React.Fragment>
            <FormGroup>
                <Label className="font-weight-bold mb-0" for={props.name} hidden={props.hideLabel}>{props.title}</Label>

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

Password.propTypes = {
    addonType: PropTypes.oneOf(['prepend', 'append']),
    icon: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    hideLabel: PropTypes.bool.isRequired,
    valid: PropTypes.bool,
    errorMessage: PropTypes.string
}

export default Password;