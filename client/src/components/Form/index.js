import React from "react";
import "./style.css";

function Form (props) {

    return (
        <form>
            <input
            type="text"
            placeholder="Item Name"/>
            <br/>
            <input
            type="text"
            placeholder="Amount to Sell for"
            />
            <p>UPLOAD JPG placeholder</p>
            <input 
            type="text"
            placeholder="Item Description"
            id="itemDesc"/>
            <button>Submit</button>
        </form>
    )

}

export default Form;