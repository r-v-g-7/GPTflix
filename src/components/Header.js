import React from "react";
import { PROFILE_IMAGE } from "../utils/constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-gradient-to-b from-black via-black/60 to-transparent">
      {/* Logo */}
      <img
        src="/app-logo.png"
        alt="GPTFLIX Logo"
        className="w-32 sm:w-40 object-contain brightness-150"
      />

      {/* Profile + Classy Sign Out */}
      <div className="flex items-center gap-3">
        <img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="w-10 h-10 rounded-md cursor-pointer hover:opacity-80 transition"
        />
        <button className="bg-black/60 text-white text-sm px-3 py-1 rounded hover:bg-black/80 transition font-medium">
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
