import React from "react";
import '../../assets/styles/Carousel.css'
import { BiMinus } from "react-icons/bi";
import { MovieTitle } from "../text/Text";



export const CarouselItem = props => {

    const { title, image, alt, year, click, style } = props


    return (
        <div className="carousel-item__wraper" style={{ width: "200px" }}>
            <div className="carousel-item__image-wraper">
                <img src={image} alt={alt} />
                <div className="content fade">
                    
                    <BiMinus
                        className="carousel-item__add-button"
                        onClick={click} />
                </div>
            </div>
            <div className="carousel-item__data">
                <MovieTitle>{title}</MovieTitle>
            </div>
        </div>
    );
}

export default CarouselItem;



// export const CarouselItem = ({ children, width }) => {
//     return (
//         <div className="carousel-item" style={{ width: width }}>
//             {children}
//         </div>
//     );
// }