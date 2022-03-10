import React from "react";
import '../../../src/App.css'


export const SmallCard = props => {
    const { title, image, alt, year, click } = props


    return (
        <div>
            <div className="divimage">
                <img src={image} className="image" alt={alt} />
                <button
                    onClick={click}
                >ADD</button>
            </div>

            <h4>{title}</h4>
            <p>{year}</p>
        </div>
    )
}

export default SmallCard;