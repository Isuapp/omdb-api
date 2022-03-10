import React from "react";
import { useSelector } from "react-redux";
import SmallCard from "../card/SmallCard";


export const FavoriteCarousel = () => {

    const favoriteMovies = useSelector(state => state.favoriteMovies)
    console.log('favoriteMovies en sandbox', favoriteMovies)

    return (
        <div className="favoritesSection">
            {
                favoriteMovies.map(favorites =>
                    <SmallCard
                        title={favorites.Title}
                        image={favorites.Poster}
                        alt={favorites.title}
                        year={favorites.Year}
                    />
                )}
        </div>
    )
}

export default FavoriteCarousel;