import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'

const Browse = () => {
  useNowPlayingMovies()

  return (
    <div className="text-white relative">
      <Header /> {/* fixed header */}
      <MainContainer /> {/* starts from top, will go behind header */}
    </div>
  )
}

export default Browse
