import React, { useEffect } from 'react'
import Header from './Header'
import { getNowPlayingMoviesUrl } from '../utils/tmdb'
import { BACKGROUND_IMAGE } from '../utils/constants'

const Browse = () => {
  const getNowPlayingMovies = async () => {
    try {
      const getNowPlayingMoviesData = await fetch(getNowPlayingMoviesUrl)
      if (!getNowPlayingMoviesData.ok) throw new Error("Failed to fetch movies");
      const getNowPlayingMoviesJson = await getNowPlayingMoviesData.json()
      console.log(getNowPlayingMoviesJson.results);
    } catch (err) {
      console.error("Error fetching the movies: ", err)
    }
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])


  return (
    <div className="p-10 text-white">
      <div className='flex justify-between'>
        <Header />
        <img src={BACKGROUND_IMAGE} alt="" className='w-12' />
      </div>
    </div>
  )
}


export default Browse
