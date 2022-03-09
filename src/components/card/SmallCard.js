import React from "react";
import '../../../src/App.css'


export const SmallCard = props => {
    const { title, image, alt, year } = props

    return (
        <div>
            <div className="divimage">
                <img src={image} className="image" alt={alt} />
            </div>

            <h4>{title}</h4>
            <p>{year}</p>
        </div>
    )
}

export default SmallCard;