import React from "react"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-36 py-4 bg-gradient-to-b from-black/80 to-transparent z-10">
      {/* Netflix Logo */}
      <img
        className="w-52 cursor-pointer object-contain"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {/* Sign Up Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 mr-4 rounded text-sm transition-colors duration-200">
        Sign Up
      </button>
    </div>
  )
}

export default Header
