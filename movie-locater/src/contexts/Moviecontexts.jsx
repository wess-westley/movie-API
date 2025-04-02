import { createContext, useEffect, useContext, useState } from "react";

const Moviecontext = createContext();


export const useMovieContext = () => useContext(Moviecontext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorite] = useState([]);

  
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorite(JSON.parse(storedFavs));
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  
  const addfavorites = (Movie) => {
    setFavorite((prev) => [...prev, Movie]);
  };

  
  const removefavourites = (Movieid) => {
    setFavorite((prev) => prev.filter((movie) => movie.id !== Movieid));
  };

  
  const isfavourite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  
  return (
    <Moviecontext.Provider
      value={{
        favorites,
        addfavorites,
        removefavourites,
        isfavourite,
      }}
    >
      {children}
    </Moviecontext.Provider>
  );
};
