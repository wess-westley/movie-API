import '../Css/Favorite.css';
import { useMovieContext } from '../contexts/Moviecontexts'; // Adjust the path to your context
import Moviecard from '../Big/Moviecard';
function Favorite() {
  const { favorites, removefavourites } = useMovieContext();

  return (
    <div className="favoritess">
      {favorites.length > 0 ? (
        <>
          <h3>Your Favorite Movies:</h3>
          <div className="favorite-grid">
            {favorites.map((movie) => (
              <div className="favorite-card" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h4>{movie.title}</h4>
                <p>Release Date: {movie.release_date}</p>
                <button
                  className="remove-button"
                  onClick={() => removefavourites(movie.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>You have not added any favorite movies yet.</h3>
          <p>Press the love button on a movie to start adding!</p>
        </>
      )}
    </div>
  );
}

export default Favorite;
