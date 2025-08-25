import React, { useRef, useState } from 'react'
import Header from "./Header"
import validation from '../utils/validation'

const Login = () => {
  const [signupForm, setSignupForm] = useState(false)
  const [error, setError] = useState(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSignupForm = () => {
    setSignupForm(!signupForm)
    setError(null) // Clear errors when switching forms
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const result = validation(email, password)
    setError(result)
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

        {/* Login Form Container - Card Glow and Hover Pop */}
        <div className="relative bg-black/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-red-500/40 transition-all duration-300 
          before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-red-500/10 before:to-white/5 before:blur-2xl before:opacity-70 before:pointer-events-none 
          hover:scale-[1.015]">

          <div className="relative z-10">
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
                  ref={emailRef}
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
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 text-sm focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 outline-none transition-all duration-200 hover:bg-white/15 hover:border-white/40"
                  placeholder="Password"
                />
              </div>

              {/* Enhanced Error Message */}
              {error && (
                <div className="animate-in slide-in-from-top duration-300 mb-4">
                  <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-300 text-sm font-medium leading-relaxed">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-xl"
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

            {/* Divider - Bolder, Glow Effect */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30 shadow-[0_0_8px_0_rgba(220,38,38,0.12)]"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-black/70 text-gray-400 rounded-lg shadow-sm border border-white/10">
                  or
                </span>
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
    </div>
  )
}

export default Login
