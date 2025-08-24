import React from "react"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-start justify-between px-24 py-2 bg-gradient-to-b from-black/80 to-transparent z-10">
      {/* Netflix Logo */}
      <div className="w-40 h-36 overflow-hidden mt-2">
        <img
          className="w-32 max-h-36 object-contain [filter:brightness(1.9)]"
          src="/app-logo.png"
          alt="GPTFLIX Logo"
        />
      </div>

      {/* Sign Up Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 mr-4 rounded text-sm transition-colors duration-200 mt-2">
        Sign Up
      </button>
    </div>

  )
}

export default Header
