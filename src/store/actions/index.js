export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";


export const addMovie = favoriteMovie => { return { type: "ADD_MOVIE", payload: favoriteMovie } };
export const deleteMovie = key => { return { type: "DELETE_MOVIE", payload: key } };