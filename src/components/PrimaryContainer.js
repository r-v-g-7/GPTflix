import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";

const PrimaryContainer = () => {
    const [videoMovie, setVideoMovie] = useState(null);
    const [trailerId, setTrailerId] = useState("xvFZjo5PgG0");

    const movies = useSelector((state) => state.movies.nowPlaying);
    const filterMovie = movies?.[0];
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

        const officialTrailer = videoMovie.results.find(
            (item) => item.type === "Trailer" && item.name.includes("Official Trailer")
        );

        const anyTrailer = videoMovie.results.find(
            (item) => item.type === "Trailer"
        );

        const finalTrailer = officialTrailer || anyTrailer;
        if (finalTrailer) setTrailerId(finalTrailer.key);
    }, [videoMovie]);

    if (!filteredTrailerMovieId) return null;

    return (
        <div
            className="relative h-[90vh] overflow-hidden"
            style={{
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                marginRight: "calc(-50vw + 50%)",
            }}
        >
            {/* YouTube trailer as background */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
                    style={{ pointerEvents: "none" }}
                    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailerId}&vq=hd2160&playsinline=1&disablekb=1&iv_load_policy=3`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Netflix-style gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent"></div>

            {/* Content overlay - subtle Netflix style */}
            <div className="absolute bottom-[20%] left-12 text-white max-w-[36%] z-10">
                <h1 className="text-5xl font-bold mb-4 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {filterMovie?.title || filterMovie?.name || "MOVIE TITLE"}
                </h1>
                <p className="text-base leading-relaxed mb-5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] font-normal">
                    {filterMovie?.overview?.length > 150
                        ? filterMovie.overview.slice(0, 150) + "..."
                        : filterMovie?.overview || "Movie description..."}
                </p>
                <div className="flex gap-3">
                    <button className="bg-white text-black px-6 py-2.5 text-base font-semibold rounded flex items-center gap-2 hover:bg-white/90 transition-all">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                    </button>
                    <button className="bg-gray-500/70 text-white px-6 py-2.5 text-base font-semibold rounded flex items-center gap-2 hover:bg-gray-500/50 transition-all backdrop-blur-sm">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeWidth="2" d="M12 16v-4M12 8h.01" />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrimaryContainer;
