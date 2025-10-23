import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div className="relative w-full min-h-screen overflow-auto scrollbar-netflix">
      {/* Fullscreen background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-20"
      />

      {/* Dark overlay for contrast */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Scrollable content above background */}
      <div className="relative z-10">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default Body;
