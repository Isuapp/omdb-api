import React from "react";

export const SearchBox = props =>{

    const {
        label, 
        placeHolder,
        value,
        change,
    } = props;

    return(
        <div>
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