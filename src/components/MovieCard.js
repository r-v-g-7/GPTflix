import React from 'react';
import { useSelector } from 'react-redux';
import { MOVIES_POSTER_URL } from '../utils/constants';

const MovieCard = () => {
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
    if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;

    return (
        <div className="flex justify-start items-start p-6 bg-black">
            <div
                className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto"
                style={{
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none' /* IE 10+ */
                }}
            >
                {nowPlayingMovies.map((movie) => (
                    <div
                        key={movie.id}
                        className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                        <img
                            src={MOVIES_POSTER_URL + movie.poster_path}
                            alt={movie.title}
                            className="w-36 rounded-lg shadow-lg shadow-black/50 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieCard;
