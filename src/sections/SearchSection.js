import React, { useEffect, useState } from "react";
import SearchBox from "../components/fields/SearchBox";
import SmallCard from "../components/card/SmallCard";
import useSearchMovies from "../store/hooks/useSearchMovies";

export const SearchSection = () => {

    const [search, SetSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const { searchMovies } = useSearchMovies();

    const onChangeHandler = async (e) => {
        SetSearch(e.target.value)
        try {
            const movies = await searchMovies(search)
            console.log('<**Movies**>', movies)
            setMovies(movies)
        } catch (error) {
            console.log('<**error**>', error)
        }
    };
    useEffect(()=>{
        console.log('useEffect', search)
    },[search])

    return (
        <div>
            <SearchBox
                placeHolder="Search"
                change={onChangeHandler}
                value={search}
            />
            {
                movies === undefined
                    ?
                    <h1>Movies?</h1>
                    :
                    <div>
                        {
                            movies.map(movie =>

                                <SmallCard
                                    title={movie.Title}
                                    image={movie.Poster}
                                    alt={movie.title}
                                    year={movie.Year}

                                />


                            )
                        }
                    </div>


            }

        </div>
    )
}

export default SearchSection;