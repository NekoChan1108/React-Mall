import React from 'react';
import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Color from "./Color/Color.jsx";
import "./SideBar.css"

const SideBar = ({handleRadioChange}) => {
    return (
        <div>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleRadioChange={handleRadioChange}/>
                <Price handleRadioChange={handleRadioChange}/>
                <Color handleRadioChange={handleRadioChange}/>
            </section>
        </div>
    );
};

export default SideBar;