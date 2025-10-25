import React from "react";
import { PROFILE_IMAGE } from "../utils/constants";
import { Sparkles } from "lucide-react"; // ✨ for a “smart AI” feel
import { useDispatch } from "react-redux";
import { setGptSearchToggle } from "../utils/gptSlice";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = ({ userInfo }) => {
  const dispatch = useDispatch();
  const gptSearchToggle = useSelector((item) => item.gpt.gptSearchToggle)
  const navigate = useNavigate()

  const handleGptSearch = () => {
    dispatch(setGptSearchToggle(true))
    navigate("/gpt-search")
  }


  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-gradient-to-b from-black via-black/70 to-transparent">
      {/* Logo */}
      <img
        src="/app-logo.png"
        alt="GPTFLIX Logo"
        className="w-32 sm:w-40 object-contain brightness-150"
      />

      {/* Right section: GPT Search + Profile + Sign Out */}
      {userInfo && <div className="flex items-center gap-4">
        {/* GPT Search — Main Feature Button */}
        <button
          onClick={() => handleGptSearch()}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-purple-500/30 transition-all duration-300"
        >
          <Sparkles size={18} />
          GPT Search
        </button>

        {/* Profile image */}
        <img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="w-10 h-10 rounded-md cursor-pointer hover:opacity-80 transition"
        />

        {/* Sign Out */}
        <button className="bg-black/60 text-white text-sm px-3 py-1 rounded hover:bg-black/80 transition font-medium">
          Sign Out
        </button>
      </div>}

    </header>
  );
};

export default Header;
