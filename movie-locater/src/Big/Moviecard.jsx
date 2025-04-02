import "../Css/Moviecard.css";
import Navbar from "./Navbar";
import { useMovieContext } from "../contexts/Moviecontexts";

function Moviecard({ movie }) {
  const {
    favorites,
    addfavorites,
    removefavourites,
    isfavourite,
  } = useMovieContext();
  const isFavorite = isfavourite(movie.id);

  function handleFavorite(e) {
    e.preventDefault();
    if (isFavorite) {
      removefavourites(movie.id);
    } else {
      addfavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            onClick={handleFavorite}
            className={`favorite-btn${isFavorite ? " active" : ""}`}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default Moviecard;
