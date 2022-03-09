import React, { useEffect, useState } from "react";
import useSearchMovies from "../store/hooks/useSearchMovies";
import axios from 'axios'

const Sandbox = () => {

    ///////////////////////WITH A SEARCH BUTTON////////////////////////
    // const [search, setSearch] = useState('');
    // const [movies, setMovies] = useState([]);

    // const { searchMovies } = useSearchMovies();

    // const onChangeHandler = e => {
    //   setSearch(e.target.value)
    // };

    // const handleInput = async () => {
    //   console.log('valor del input', search);
    //   try {
    //     const movies = await searchMovies(search);
    //     setMovies(movies);
    //   } catch (error) {
    //     // handle error/set any error state/etc...
    //   }
    // }
    ////////////////////////////////////////////////////////////////////


    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const { searchMovies } = useSearchMovies();

    const onChangeHandler = async (e) => {
        setSearch(e.target.value)
        try {
            const movies = await searchMovies(search);
            console.log('MOVIES', movies)
            setMovies(movies);
        } catch (error) {
            // handle error/set any error state/etc...
        }

    }



    return (
        <div>
            <h1>Sandbox</h1>
            <div>
                <input type="text" value={search} onChange={onChangeHandler} />
                {/* <button onClick={handleInput}>search</button> */}
            </div>
            {
                movies === undefined
                    ?
                    <h1>¿pelis?</h1>
                    :
                    <ul>
                        {movies.map(({ Title }) => (
                            <li key={Title}>{Title}</li>
                        ))}
                    </ul>
            }
        </div>

    );
};

export default Sandbox;