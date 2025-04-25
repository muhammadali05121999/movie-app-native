export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWYzNzlmOTQyYzY3Y2RiNDZiZDVlMWYzNWJjZTc1OSIsIm5iZiI6MTc0NDQwNzg5MC4yMzMsInN1YiI6IjY3Zjk4ZDUyZWE4MGQ4NTE3NTk5YzlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQr6t_9oCn7VC8u73rscmD-k5uBYAxZwy-9ROre7V20`,
  },
};

const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  return data.results;
};

export default fetchMovies;

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWYzNzlmOTQyYzY3Y2RiNDZiZDVlMWYzNWJjZTc1OSIsIm5iZiI6MTc0NDQwNzg5MC4yMzMsInN1YiI6IjY3Zjk4ZDUyZWE4MGQ4NTE3NTk5YzlhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cQr6t_9oCn7VC8u73rscmD-k5uBYAxZwy-9ROre7V20'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
