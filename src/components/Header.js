import React from "react"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-start justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-4 sm:py-6 z-30">
      {/* Enhanced background with better gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent pointer-events-none"></div>

      {/* Logo */}
      <div className="relative z-10 w-28 sm:w-32 md:w-36 lg:w-40 overflow-hidden">
        <img
          className="w-full h-auto object-contain [filter:brightness(1.9)] drop-shadow-lg"
          src="/app-logo.png"
          alt="GPTFLIX Logo"
        />
      </div>

      {/* Space for future elements */}
      <div className="relative z-10">
        {/* Future: Add profile/menu buttons here */}
      </div>
    </div>
  )
}

export default Header
