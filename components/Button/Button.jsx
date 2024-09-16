import React from 'react';

const Button = ({
    className,
    value,
    onClick,
    type = "text"
}) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
        >
            {value}
        </button>
    );
}

export default Button;
