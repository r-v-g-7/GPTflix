import React, { useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [signupForm, setSignupForm] = useState(false)

  const handleSignupForm = () => {
    setSignupForm(!signupForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your login logic here later
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Header />
      <div className="w-full max-w-[25rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            {signupForm ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-300 text-sm">
            {signupForm ? 'Join us and start streaming today' : 'Ready to binge? Let\'s get you in.'}
          </p>
        </div>

        {/* Login Form Container - Fixed height to prevent jumping */}
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300">

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            {signupForm && (
              <div className="animate-in slide-in-from-top duration-300">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 outline-none transition-all duration-200 hover:bg-white/15 hover:border-white/40"
                  placeholder="Full Name"
                />
              </div>
            )}

            {/* Age Input */}
            {signupForm && (
              <div className="animate-in slide-in-from-top duration-300">
                <input
                  id="age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  required
                  min="13"
                  max="120"
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 outline-none transition-all duration-200 hover:bg-white/15 hover:border-white/40"
                  placeholder="Enter your Age"
                />
              </div>
            )}

            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 outline-none transition-all duration-200 hover:bg-white/15 hover:border-white/40"
                placeholder="Email address"
              />
            </div>

            {/* Password Input */}
            <div className="pb-3">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 outline-none transition-all duration-200 hover:bg-white/15 hover:border-white/40"
                placeholder="Password"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-lg hover:shadow-xl"
            >
              {signupForm ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          {/* Forgot Password Link - Fixed positioning */}
          {!signupForm && (
            <div className="text-center mt-5">
              <button
                type="button"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:underline"
              >
                Forgot your password?
              </button>
            </div>
          )}

          {/* Add consistent spacing when no forgot password link */}
          {signupForm && <div className="mt-5"></div>}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-black/60 text-gray-400">or</span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {signupForm ? 'Already have an account? ' : "Don't have an account? "}
              <button
                type="button"
                className="text-white hover:text-red-400 font-medium underline underline-offset-2 transition-colors duration-200 hover:no-underline"
                onClick={() => handleSignupForm()}
              >
                {signupForm ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
