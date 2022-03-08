import React, { useState } from "react";
import searchMovies from "../store/hooks/useSearchMovies";

const Sandbox = () => {


    
    const [search, setSearch] = useState('')   
    const onChangeHandler = e =>{
        setSearch(e.target.value)
        console.log('Search result', searchMovies(search))
    } 

    const handleInput =()=> {
        
        console.log('valor del input', search)
    }
    
    return (
        <div>
            <h1>Sandbox</h1>
            <div>
                <input type="text" value={search} onChange={onChangeHandler}/>
                <button onClick={handleInput()}>buscar</button>

            </div>
        </div>
    )
}

export default Sandbox;