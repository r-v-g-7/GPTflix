const API_KEY = "94b10afc70ab608e1e5c308d6a70b7f2";
const BASE_URL = "https://api.themoviedb.org/3"

export const getNowPlayingMoviesOptions = {
    method: 'GET',
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGIxMGFmYzcwYWI2MDhlMWU1YzMwOGQ2YTcwYjdmMiIsIm5iZiI6MTc1OTE0MDgzMS40OTUwMDAxLCJzdWIiOiI2OGRhNWJkZjAzYWM0NDk2NDBlMWJmOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.K3UuP6cXwTeLHKigxJ7tILYDdXymsmsp1t6gJZO3nFk"
    }
};
export const getNowPlayingMoviesUrl = `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
