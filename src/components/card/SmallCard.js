import React from "react";
import '../../../src/App.css'
import Poster from "../../assets/images/214511.jpg"


export const SmallCard = props => {
    const { title, image, alt } = props

    return (
        <div>
            <div className="divimage">
                <image src="../../assets/images/214511.jpg" className="image" alt={alt} />
            </div>

            <h4>{title}</h4>
        </div>
    )
}

export default SmallCard;