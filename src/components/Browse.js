import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Browse = () => {

  useNowPlayingMovies()
  const nowPlayingMovies = useSelector(state => state.movies);

  useEffect(() => {
    console.log(nowPlayingMovies)
  }, [nowPlayingMovies])


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
