import React from 'react'
import Header from "./Header"

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here later
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Header />
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300 text-sm">Ready to binge? Let's get you in.</p>
        </div>

        {/* Login Form Container - Now includes everything */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div className="mb-8">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Password"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-6">
            <button
              type="button"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Forgot your password?
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-black/40 text-gray-400">or</span>
            </div>
          </div>

          {/* Bottom Slang Section - Now inside the container */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              New to the party? 🎬
            </p>
            <p className="text-gray-500 text-xs">
              Don't have an account?{' '}
              <a
                href="/signup"
                className="text-white hover:text-red-400 font-medium underline underline-offset-2 transition-colors"
              >
                Sign up
              </a>
              {' '}and start your binge journey!
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
