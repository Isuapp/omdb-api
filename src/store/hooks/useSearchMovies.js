import React, { useState, useEffect } from "react";


const useSearchMovies = (searchValue) => {

    const API_KEY = "731e41f";
    const URL = `http://www.omdbapi.com/?&apikey=${API_KEY}&s=${searchValue}`

    // Manejador del estado
    const [searchMovies, setSearchMovies] = useState([])
    //Llamar y escuchar a la api
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setSearchMovies(data.Search))
            .catch((error) => {
                console.Console.toString('Error en la petición api', error)
            })
    }, []);
    return searchMovies;
};



// const searchMovies = (search_term)=>{
//     const URL = `http://www.omdbapi.com/?&apikey=${API_KEY}&s=${search_term}` 
//     const API_KEY = "731e41f";

//     // Manejador del estado
//     const [searchMovies, setSearchMovies] = useState([])
//     // Llamar y escuchar a la API
//     useEffect(()=>{
//         fetch(URL)
//         .then(response=>response.json())
//         .then(data=>setSearchMovies(data.Search))
//         .catch((error)=>{
//             console.Console.toString('Error en la petición api', error)
//         })
//     }, []);
//     return searchMovies;


// }
export default useSearchMovies;