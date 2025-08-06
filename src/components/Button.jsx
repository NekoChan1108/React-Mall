import React from 'react';

const Button = ({handleButtonClick, value, title}) => {
    return (
        <div>
            <button className="btns" onClick={handleButtonClick} value={value}>{title}</button>
        </div>
    );
};

export default Button;