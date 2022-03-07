import React from "react";
import { useSelector } from "react-redux";
import useMovies from '../store/hooks/useMovies';
import searchMovies from "../store/hooks/useSearchMovies";


const Sandbox = () => {


    const movies = useMovies(URL)
    console.log('Movies', movies)
    const favoriteMovies = useSelector(state => state.favoriteMovies)
    console.log('Favorite Movies', favoriteMovies)
    const starWarsMovies = useSelector(state => state.starWarsMovies)
    console.log('Star Wars Movies', starWarsMovies)

    console.log('search movies', searchMovies('hola'))
    return (
        <div>
            <h1>Sandbox</h1>
            <div>

            </div>
        </div>
    )
}

export default Sandbox;