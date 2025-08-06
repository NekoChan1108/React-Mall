import React from 'react';

const Input = ({handleRadioChange, name, value, title, color}) => {
    return (
        <label className="sidebar-label-container">
            <input type="radio"
                   name={name}
                   value={value}
                   onChange={handleRadioChange}
            />
            <span className="checkmark" style={{backgroundColor: color}}></span>{title}
        </label>
    );
};

export default Input;