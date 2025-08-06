import "./Category.css"
import React from 'react';
import Input from "../../components/Input.jsx";

const Category = ({handleRadioChange}) => {
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
                <Input name="test" value="" title="All" handleRadioChange={handleRadioChange}/>
                <Input name="test" value="sneakers" title="Sneakers" handleRadioChange={handleRadioChange}/>
                <Input name="test" value="flats" title="Flats" handleRadioChange={handleRadioChange}/>
                <Input name="test" value="sandals" title="Sandals" handleRadioChange={handleRadioChange}/>
                <Input name="test" value="heels" title="Heels" handleRadioChange={handleRadioChange}/>
            </div>
        </div>
    );
};

export default Category;