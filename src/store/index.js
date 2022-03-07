import { createStore } from "redux";
import useMovies from './hooks/useMovies';


function reducers(){
    return{}

};

export default ()=>{
    return{
        ...createStore(reducers,useMovies(URL))
    };
};

