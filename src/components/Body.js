import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './Header'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      {/* Netflix Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_medium.jpg"
        alt="Netflix Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70 z-10"></div>

      {/* Subtle ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Router Content */}
      <div className="relative z-20">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}

export default Body
