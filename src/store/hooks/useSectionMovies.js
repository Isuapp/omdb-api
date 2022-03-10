const useSectionMovies = () => {
    const API_KEY = "731e41f";
  
    const sectionMovies = (searchValue) => {
      const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${searchValue}`;
      return fetch(URL)
        .then((response) => response.json())
        .then((data) => data.Search)
        .catch((error) => {
          console.error("Error", error);
          throw error;
        });
    };
  
    return { sectionMovies };
  };

export default useSectionMovies;