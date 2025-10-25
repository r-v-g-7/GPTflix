import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'

const Browse = () => {

  useNowPlayingMovies()

  // useEffect(() => {
  //   if (gptSearchToggle) {
  //     navigate("/gpt-search")
  //     dispatch(setGptSearchToggle())
  //   }
  // }, [gptSearchToggle, navigate, dispatch])

  return (
    <div className="text-white relative">
      {/* <Header /> fixed header */}
      <MainContainer /> {/* starts from top, will go behind header */}
    </div>
  )
}

export default Browse
