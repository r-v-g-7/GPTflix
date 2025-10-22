import { PROFILE_IMAGE } from "../utils/constants"

const Header = ({ user }) => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-start justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-2 sm:py-4 z-30 bg-blend-darken">
      {/* Enhanced background with better gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-28 sm:w-32 md:w-36 lg:w-40 overflow-hidden">
        <img
          className="w-full h-auto object-contain [filter:brightness(1.9)] drop-shadow-lg"
          src="/app-logo.png"
          alt="GPTFLIX Logo"
        />
      </div>

      {/* Space for future elements */}
      <div className="relative z-10">


        {user && <img src={PROFILE_IMAGE} alt="" className='w-12' />}

      </div>
    </div>
  )
}

export default Header 
