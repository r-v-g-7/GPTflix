import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { MOVIES_POSTER_URL } from '../utils/constants';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const MovieCard = () => {
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlaying);
    const scrollRef = useRef(null);

    if (!nowPlayingMovies || nowPlayingMovies.length === 0) return null;

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const scrollAmount = 400; // Adjust scroll distance
        scrollRef.current.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative flex justify-start items-center p-6 bg-black group">
            {/* Left Arrow */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 
                   transition opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="text-white w-6 h-6" />
            </button>

            {/* Movie Cards */}
            <div
                ref={scrollRef}
                className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto scroll-smooth"
                style={{
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE
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

            {/* Right Arrow */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 
                   transition opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="text-white w-6 h-6" />
            </button>
        </div>
    );
};

export default MovieCard;
