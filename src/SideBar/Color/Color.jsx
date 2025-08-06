import "./Color.css"
import React from 'react';
import Input from "../../components/Input.jsx";

const Color = ({handleRadioChange}) => {
    return (
        <div>
            <h2 className="sidebar-title color-title">Colors</h2>
            {/*<label className="sidebar-label-container color-title">*/}
            {/*    <input type="radio" name="test"/>*/}
            {/*    <span className="checkmark"></span>All*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test"/>*/}
            {/*    <span className="checkmark"></span>Black*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test"/>*/}
            {/*    <span className="checkmark"></span>Blue*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test"/>*/}
            {/*    <span className="checkmark"></span>Green*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test"/>*/}
            {/*    <span className="checkmark"></span>Red*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test"/>*/}
            {/*    <span className="checkmark"></span>White*/}
            {/*</label>*/}
            <label className="sidebar-label-container color-title">
                <input type="radio" name="test1" value="" onChange={handleRadioChange}/>
                <span className="checkmark all"></span>All
            </label>
            <Input handleRadioChange={handleRadioChange} name="test1" value="black" color="black" title="Black"/>
            <Input handleRadioChange={handleRadioChange} name="test1" value="blue" color="blue" title="Blue"/>
            <Input handleRadioChange={handleRadioChange} name="test1" value="green" color="green" title="Green"/>
            <Input handleRadioChange={handleRadioChange} name="test1" value="red" color="red" title="Red"/>
            <label className="sidebar-label-container">
                <input type="radio" name="test1" value="white" onChange={handleRadioChange}/>
                <span className="checkmark" style={{ background: "white", border: "2px solid black" }}></span>White
            </label>
        </div>
    );
};

export default Color;