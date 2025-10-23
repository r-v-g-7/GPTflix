import React from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { PROFILE_IMAGE } from "../utils/constants";

const Header = () => {
  const user = useUser();

  if (user === undefined) return <div className="h-16 bg-black"></div>;

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 bg-gradient-to-b from-black via-black/60 to-transparent">
      <img
        src="/app-logo.png"
        alt="GPTFLIX Logo"
        className="w-32 sm:w-40 object-contain brightness-150"
      />

      {user && (
        <img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="w-10 h-10 rounded-md cursor-pointer hover:opacity-80"
        />
      )}
    </header>
  );
};

export default Header;
