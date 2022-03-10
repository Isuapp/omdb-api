const initialState = {
    favoriteMovies:[],
    LordOfTheRingsMovies: []
}


const reducer = (state=initialState, action) => {

    switch (action.type) {
        case "ADD_MOVIE":
            return { ...state, favoriteMovies: [...state.favoriteMovies, action.payload]}
            default:
                return state;
    }
}

export default reducer;