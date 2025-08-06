import "./Price.css"
import React from 'react';
import Input from "../../components/Input.jsx";

const Price = ({handleRadioChange}) => {
    return (
        <div className="ml">
            <h2 className="sidebar-title price-title">Price</h2>
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test2"/>*/}
            {/*    <span className="checkmark"></span>All*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test2"/>*/}
            {/*    <span className="checkmark"></span>$0-$50*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test2"/>*/}
            {/*    <span className="checkmark"></span>$50-$100*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test2"/>*/}
            {/*    <span className="checkmark"></span>$100-$150*/}
            {/*</label>*/}
            {/*<label className="sidebar-label-container">*/}
            {/*    <input type="radio" name="test2"/>*/}
            {/*    <span className="checkmark"></span>$150+*/}
            {/*</label>*/}
            <Input name="test2" handleRadioChange={handleRadioChange} value="" title="All"/>
            <Input name="test2" handleRadioChange={handleRadioChange} value={50} title="$0 - $50"/>
            <Input name="test2" handleRadioChange={handleRadioChange} value={100} title="$50 - $100"/>
            <Input name="test2" handleRadioChange={handleRadioChange} value={150} title="$100 - $150"/>
            <Input name="test2" handleRadioChange={handleRadioChange} value={200} title="$150 +"/>
        </div>
    );
};

export default Price;