import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const AlertMessage = (props) => {
    return (
        <React.Fragment>
            <Alert color={props.type} isOpen={props.visible} toggle={props.onDismiss}>
                {props.errorMessage}
            </Alert>
        </React.Fragment>);


}

alert.propTypes = {
    onDismiss: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default AlertMessage;