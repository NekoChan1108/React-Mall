import React from 'react';

const Input = ({item}) => {
    return (
        <label className="sidebar-label-container">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>{item}
        </label>
    );
};

export default Input;