import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";

const PrimaryContainer = () => {
    const [videoMovie, setVideoMovie] = useState(null);
    const [movieTrailer, setMovieTrailer] = useState(null);
    const [trailerId, setTrailerId] = useState("xvFZjo5PgG0");

    const movies = useSelector((state) => state.movies);
    const filterMovie = movies[0];
    const filteredTrailerMovieId = filterMovie?.id;

    useEffect(() => {
        const fetchTrailerMovies = async () => {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${filteredTrailerMovieId}/videos?language=en-US`,
                TMDB_OPTIONS
            );
            const data = await res.json();
            setVideoMovie(data);
        };

        if (filteredTrailerMovieId) fetchTrailerMovies();
    }, [filteredTrailerMovieId]);

    useEffect(() => {
        if (!videoMovie?.results) return;

        const [data] = videoMovie.results.filter(
            (item) => item.type === "Trailer" && item.name === "Official Trailer"
        );

        const fallback = videoMovie.results.find(
            (item) => item.type === "Trailer"
        );

        const finalTrailer = data || fallback;

        if (finalTrailer) {
            setMovieTrailer(finalTrailer);
            setTrailerId(finalTrailer.key); // Use YouTube video key
        } else {
            console.warn("No trailer found for this movie");
        }
    }, [videoMovie]);

    if (!filteredTrailerMovieId) return null;

    return (
        <div className="relative w-full h-[90vh] overflow-hidden">
            {/* YouTube trailer as background */}
            <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&vq=hd1080`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            {/* Black gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>

            {/* Info overlay */}
            <div className="absolute bottom-20 left-10 text-white max-w-lg">
                <h1 className="text-5xl font-bold mb-4">
                    {filterMovie?.title || filterMovie?.name || "MOVIE TITLE"}
                </h1>
                <p className="text-lg mb-4">
                    {filterMovie?.overview?.length > 200
                        ? filterMovie.overview.slice(0, 200) + "..."
                        : filterMovie?.overview || "Movie description..."}
                </p>
                <div className="flex gap-4">
                    <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-gray-300 transition">
                        Play
                    </button>
                    <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 font-semibold rounded hover:bg-gray-600 transition">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrimaryContainer;
