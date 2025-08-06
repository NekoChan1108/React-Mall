import "./Recommended.css"
import React from 'react';
import Button from "../components/Button.jsx";

const Recommended = ({handleButtonClick}) => {
    return (
        <div>
            <h2 className="recommended-title">Recommended</h2>
            <div className="recommended-flex">
                {/*<button className="btns">All Products</button>*/}
                {/*<button className="btns">Nike</button>*/}
                {/*<button className="btns">Adidas</button>*/}
                {/*<button className="btns">Puma</button>*/}
                {/*<button className="btns">Vans</button>*/}
                <Button handleButtonClick={handleButtonClick} title="All Products" value=""  />
                <Button handleButtonClick={handleButtonClick} title="Nike" value="Nike"  />
                <Button handleButtonClick={handleButtonClick} title="Adidas" value="Adidas"  />
                <Button handleButtonClick={handleButtonClick} title="Puma" value="Puma"  />
                <Button handleButtonClick={handleButtonClick} title="Vans" value="Vans"  />
            </div>

        </div>
    );
};

export default Recommended;