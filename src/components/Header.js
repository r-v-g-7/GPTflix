import React from "react";
import { PROFILE_IMAGE } from "../utils/constants";
import { Sparkles } from "lucide-react"; // ✨ for a “smart AI” feel
import { useDispatch } from "react-redux";
import { setGptSearchToggle } from "../utils/gptSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo)

  const handleGptSearch = () => {
    dispatch(setGptSearchToggle())
  }


  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-gradient-to-b from-black via-black/70 to-transparent">

      <img
        src="/app-logo.png"
        alt="GPTFLIX Logo"
        className="w-32 sm:w-40 object-contain brightness-150"
      />

      {/* Right section: GPT Search + Profile + Sign Out */}
      {userInfo && <div className="flex items-center gap-4">

        <button
          onClick={() => handleGptSearch()}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-purple-500/30 transition-all duration-300"
        >
          <Sparkles size={18} />
          {userInfo ? "GPT Search" : "Explore More"}
        </button>


        <img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="w-10 h-10 rounded-md cursor-pointer hover:opacity-80 transition"
        />


        <button className="text-white text-sm px-0 py-1 rounded transition font-medium pb-2">
          Sign Out
        </button>
      </div>}

    </header>
  );
};

export default Header;
