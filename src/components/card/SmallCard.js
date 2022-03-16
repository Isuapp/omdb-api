import React from "react";
import '../../assets/styles/SmallCard.css'
import { BiPlus } from "react-icons/bi";
import { MovieTitle } from "../text/Text";


export const SmallCard = props => {
    const { title, image, alt, year, click, style } = props


    return (
        <div className="wraper-smallcard" style={style}>
            <div className="wraper-smallcard__image">
                <img src={image} alt={alt} />
                <div className="content fade">
                    <div
                        className="action-button"
                        onClick={click}
                    >
                        <BiPlus className="icon"/>
                    </div>
                    <MovieTitle>{title}</MovieTitle>
                </div>
            </div>
            {/* <div className="data">
                <p>{title}</p>
            </div> */}
        </div>

    )
}

export default SmallCard;