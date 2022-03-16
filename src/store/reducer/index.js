const initialState = {
    favoriteMovies: [],
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload]
            }
        case "DELETE_MOVIE":
            return { favoriteMovies: state.favoriteMovies.filter((favoriteMovie)=>favoriteMovie !==action.payload)}
        default:
            return state;
    }
}

export default reducer;