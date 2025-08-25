import React from "react"

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-start justify-between px-40 py-2 bg-gradient-to-b from-black/80 to-transparent z-10">
      {/* Netflix Logo */}
      <div className="w-40 overflow-hidden mt-4">
        <img
          className="w-[12rem] max-h-[10rem] object-contain [filter:brightness(1.7)]"
          src="/app-logo.png"
          alt="GPTFLIX Logo"
        />
      </div>
    </div>
  )
}

export default Header
