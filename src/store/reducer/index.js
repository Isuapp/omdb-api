const initialState = {
    favoriteMovies:[],
    starWarsMovies: []
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