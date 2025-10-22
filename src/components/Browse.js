import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div className="p-10 text-white">
      <div className='flex justify-between'>
        <Header />
        <MainContainer />
      </div>
    </div>
  )
}


export default Browse
