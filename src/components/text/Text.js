import React from "react";
import "../../assets/styles/Text/Text.css"
import "../../assets/styles/Text/Title.css"
import "../../assets/styles/Text/Subtitle.css"
import "../../assets/styles/Text/MovieTitle.css"


export const Title = (props) => {
    const { children } = props
    return (<h1 className="title">{children}</h1>)
};
export const Subtitle = (props) => {
    const { children } = props
    return (<h2 className="subtitle">{children}</h2>)
}
export const Text = (props) => {
    const { children } = props
    return (<p>{children}</p>)
}
export const MovieTitle = (props) => {
    const { children } = props
    return (<h3 className="movie-title" >{children}</h3>)
}

export default Text;