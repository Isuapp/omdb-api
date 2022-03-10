export const ADD_MOVIE = "ADD_MOVIE";


export const addMovie = favoriteMovie => { return { type: "ADD_MOVIE", payload: favoriteMovie } };