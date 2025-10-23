const API_KEY = "94b10afc70ab608e1e5c308d6a70b7f2";
const BASE_URL = "https://api.themoviedb.org/3"

export const getNowPlayingMoviesUrl = `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
