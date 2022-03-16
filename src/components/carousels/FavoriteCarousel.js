import React from "react";
import Carousel from "../../components/carousels/Carousel";
import CarouselItem from "../../components/carousels/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../../store/actions";
import { Subtitle } from "../text/Text";


export const FavoriteCarousel = () => {

    const favoriteMovies = useSelector(state => state.favoriteMovies)
    const dispatch = useDispatch()

    return (
        <div>
        <Subtitle>Favorites</Subtitle>
        <Carousel>
            {
                favoriteMovies.map(favorites =>
                    <CarouselItem
                        title={favorites.Title}
                        image={favorites.Poster}
                        alt={favorites.title}
                        year={favorites.Year}
                        click={() => { dispatch(deleteMovie(favorites)) }}
                    />
                )}
        </Carousel>
    </div>

    )
}

export default FavoriteCarousel;