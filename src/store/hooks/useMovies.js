import { useState, useEffect } from "react";

const useMovies = ()=>{

    const API_KEY = "731e41f";
    const URL = `http://www.omdbapi.com/?&apikey=${API_KEY}` 

    // Handle the state
    const [movies, setMovies] = useState([])
    // Call and listen API
    useEffect(()=>{
        fetch(URL)
        .then(response=>response.json())
        .then(data=>setMovies(data.Search))
        .catch((error)=>{
            console.Console.toString('Error en la petición api', error)
        })
    }, []);
    return movies;
}


export default useMovies;