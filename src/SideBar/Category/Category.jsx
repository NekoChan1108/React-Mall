import "./Category.css"
import React from 'react';
import Input from "../../components/Input.jsx";

const Category = () => {
    return (
        <div>
            <div>
                <h2 className="sidebar-title">Category</h2>
            </div>
            <div>
                {/*<label className="sidebar-label-container">*/}
                {/*    <input type="radio" name="test"/>*/}
                {/*    <span className="checkmark"></span>All*/}
                {/*</label>*/}
                {/*<label className="sidebar-label-container">*/}
                {/*    <input type="radio" name="test"/>*/}
                {/*    <span className="checkmark"></span>Sneakers*/}
                {/*</label>*/}
                {/*<label className="sidebar-label-container">*/}
                {/*    <input type="radio" name="test"/>*/}
                {/*    <span className="checkmark"></span>Flats*/}
                {/*</label>*/}
                {/*<label className="sidebar-label-container">*/}
                {/*    <input type="radio" name="test"/>*/}
                {/*    <span className="checkmark"></span>Sandals*/}
                {/*</label>*/}
                {/*<label className="sidebar-label-container">*/}
                {/*    <input type="radio" name="test"/>*/}
                {/*    <span className="checkmark"></span>Heels*/}
                {/*</label>*/}
                <Input item="All"/>
                <Input item="Sneakers"/>
                <Input item="Flats"/>
                <Input item="Sandals"/>
                <Input item="Heels"/>
            </div>
        </div>
    );
};

export default Category;