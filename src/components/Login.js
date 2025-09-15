import React, { useRef, useState } from 'react'
import Header from "./Header"

const Login = () => {
  const [signupForm, setSignupForm] = useState(false)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSignupForm = () => {
    setSignupForm(!signupForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Form submission logic can be added here
    console.log('Form submitted:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      {/* Ambient background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-[30rem] mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4 tracking-tight">
            {signupForm ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-wide">
            {signupForm ? 'Join us and start streaming today' : 'Ready to binge? Let\'s get you in.'}
          </p>
        </div>

        {/* Enhanced Login Form Container */}
        <div className="relative bg-black/80 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/20 
          hover:border-red-500/50 transition-all duration-500 hover:shadow-red-500/20 hover:shadow-2xl
          before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br 
          before:from-red-500/15 before:via-transparent before:to-white/10 
          before:blur-2xl before:opacity-60 before:pointer-events-none 
          hover:scale-[1.02] group">

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/5 to-white/5 opacity-0 
            group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Enhanced Name Input */}
              {signupForm && (
                <div className="animate-in slide-in-from-top duration-500">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white 
                      placeholder-gray-400 text-base focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60 
                      focus:bg-white/15 outline-none transition-all duration-300 hover:bg-white/15 
                      hover:border-white/50 hover:shadow-lg hover:shadow-red-500/10"
                    placeholder="Full Name"
                  />
                </div>
              )}

              {/* Enhanced Age Input */}
              {signupForm && (
                <div className="animate-in slide-in-from-top duration-500 delay-100">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    required
                    min="13"
                    max="120"
                    className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white 
                      placeholder-gray-400 text-base focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60 
                      focus:bg-white/15 outline-none transition-all duration-300 hover:bg-white/15 
                      hover:border-white/50 hover:shadow-lg hover:shadow-red-500/10"
                    placeholder="Enter your Age"
                  />
                </div>
              )}

              {/* Enhanced Email Input */}
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  autoComplete="username"
                  required
                  className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white 
                    placeholder-gray-400 text-base focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60 
                    focus:bg-white/15 outline-none transition-all duration-300 hover:bg-white/15 
                    hover:border-white/50 hover:shadow-lg hover:shadow-red-500/10"
                  placeholder="Email address"
                />
              </div>

              {/* Enhanced Password Input */}
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="w-full px-5 py-4 bg-white/10 border border-white/30 rounded-2xl text-white 
                    placeholder-gray-400 text-base focus:ring-2 focus:ring-red-500/60 focus:border-red-500/60 
                    focus:bg-white/15 outline-none transition-all duration-300 hover:bg-white/15 
                    hover:border-white/50 hover:shadow-lg hover:shadow-red-500/10"
                  placeholder="Password"
                />
              </div>

              {/* Enhanced Sign In / Up Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 
                  hover:from-red-700 hover:via-red-800 hover:to-red-900 
                  text-white font-bold py-4 px-6 
                  rounded-2xl transition-all duration-300 transform hover:scale-[1.02] 
                  focus:outline-none focus:ring-4 focus:ring-red-500/50 shadow-2xl 
                  shadow-red-600/30 hover:shadow-red-600/50 text-lg"
              >
                {signupForm ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            {/* Enhanced Forgot Password */}
            {!signupForm && (
              <div className="text-center mt-6">
                <button
                  type="button"
                  className="text-gray-400 hover:text-white text-base transition-all duration-300 
                    hover:underline underline-offset-4 hover:decoration-red-400"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Enhanced Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30 shadow-[0_0_12px_0_rgba(220,38,38,0.15)]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 py-2 bg-black/80 text-gray-400 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
                  or
                </span>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div className="text-center">
              <p className="text-gray-400 text-base">
                {signupForm ? 'Already have an account? ' : "Don't have an account? "}
                <button
                  type="button"
                  className="text-white hover:text-red-400 font-semibold underline underline-offset-4 
                    decoration-white/50 hover:decoration-red-400 transition-all duration-300 
                    hover:no-underline hover:bg-red-500/10 px-2 py-1 rounded-lg"
                  onClick={handleSignupForm}
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
