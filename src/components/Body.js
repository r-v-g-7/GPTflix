import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // no header on login
    },
    {
      path: "/browse",
      element: <Browse />, // browse has its own header
    },
  ]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background only for login */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
