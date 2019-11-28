import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const CommonButton = (props) => {

    const {
        onClick,
        color,
        className = '',
        block = false,
        size,
        disabled = false,
        children
    } = props;

    return (
        <Button color={color} className={className} block={block} onClick={onClick} size={size} disabled={disabled}> 
            {children}
        </Button>
    );
}

CommonButton.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    block: PropTypes.bool,
    disabled: PropTypes.bool
}

export default CommonButton;