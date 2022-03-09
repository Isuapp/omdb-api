const useSearchMovies = () => {
    const API_KEY = "731e41f";
  
    const searchMovies = (searchValue) => {
      const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchValue}`;
      return fetch(URL)
        .then((response) => response.json())
        .then((data) => data.Search)
        .catch((error) => {
          console.error("Error", error);
          throw error;
        });
    };
  
    return { searchMovies };
  };

export default useSearchMovies;