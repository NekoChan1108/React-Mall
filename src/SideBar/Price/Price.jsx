import "./Price.css"
import React from 'react';
import Input from "../../components/Input.jsx";

const Price = () => {
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
            <Input item="All"/>
            <Input item="$0-$50"/>
            <Input item="$50-$100"/>
            <Input item="$100-$150"/>
            <Input item="$150+"/>
        </div>
    );
};

export default Price;