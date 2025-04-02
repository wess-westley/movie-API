
import Moviecard from "../Big/Moviecard";
import { useState, useEffect } from "react";
import "../Css/home.css";
import { searchmovies, getpopularmovies } from "../assets/Services/Api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getpopularmovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch popular movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError("Please enter a valid search query.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const searchedMovies = await searchmovies(searchQuery);
      setMovies(searchedMovies);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch search results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading && <p>Loading movies...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="movie-grid">
        {!loading &&
          !error &&
          movies.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;
