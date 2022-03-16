import React from "react";
import "../../assets/styles/SearchBox.css"

export const SearchBox = props =>{

    const {
        label, 
        placeHolder,
        value,
        change,
    } = props;

    return(
        <div className="wraper-searchbox">
            <label>{label}</label>
        <input
            value={value}
            onChange={change}
            placeholder={placeHolder}
        />

    </div>
    )
}

export default SearchBox;