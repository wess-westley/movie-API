
const API_KEY = "56fd9f5b537983064cf71cd158a2ce3b";
const BASE_URL = "https://api.themoviedb.org/3";

export const getpopularmovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch popular movies.");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const searchmovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) throw new Error("Failed to fetch search results.");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
