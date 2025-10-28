import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import GptSearch from './GptSearch'
import Header from './Header'

const Browse = () => {
  const gptSearchToggle = useSelector((state) => state.gpt.gptSearchToggle)

  // Custom hook to fetch and store now-playing movies
  useNowPlayingMovies()

  return (
    <div className="text-white relative">

      {gptSearchToggle ? (
        <GptSearch />
      ) : (
        <MainContainer />
      )}
    </div>
  )
}

export default Browse
