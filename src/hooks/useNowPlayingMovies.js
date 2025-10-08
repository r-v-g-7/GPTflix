import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { setNowPlayingMovies } from "../utils/moviesSlice";
import { getNowPlayingMoviesUrl } from "../utils/tmdb";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const getNowPlayingMoviesData = await fetch(getNowPlayingMoviesUrl)
            if (!getNowPlayingMoviesData.ok) throw new Error("Failed to fetch movies");
            const getNowPlayingMoviesJson = await getNowPlayingMoviesData.json()
            console.log(getNowPlayingMoviesJson.results);
            dispatch(setNowPlayingMovies(getNowPlayingMoviesJson.results))
        } catch (err) {
            console.error("Error fetching the movies: ", err)
        }
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [dispatch])
}

export default useNowPlayingMovies