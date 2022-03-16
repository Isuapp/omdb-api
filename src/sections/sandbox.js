import React, { useEffect, useState } from "react";
import SearchSection from "./SearchSection";
import "../assets/styles/Global.css"
import FavoriteCarousel from "../components/carousels/FavoriteCarousel";
import Text, {MovieTitle, Subtitle, Title} from "../components/text/Text";


const Sandbox = () => {


    return (
        <div className="sandbox">
            <SearchSection />
            <Text>Hola soy un texto</Text>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
            <MovieTitle>Movie Title</MovieTitle>
            <FavoriteCarousel />
        </div>
    );
};

export default Sandbox;