import React, { useRef, useState } from 'react'
import Header from "./Header"
import { supabase } from '../supabaseClient'

const Login = () => {
  const [signupForm, setSignupForm] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSignupForm = () => {
    setSignupForm(!signupForm)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setEmail()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (signupForm) {
      const { error, data } = await supabase.auth.signUp({ email, password })
      if (error) {
        alert(error.message)
      } else {
        alert("Signed up successfully, check your email to make sure it's you.")
        console.log("Signup: ", data)
        setUser(data.user);
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword(email, password)
      if (error) {
        alert(error.message)
      } else {
        alert("SignIn successfull! Keep streaming")
        console.log("SignIn Data: ", data)
        setUser(data.user)
      }
    }

    console.log('Form submitted:', { email, password })
  }

  // Write the signOut logic too.......

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Header />

      {/* Remove the background gradient - let Body.jsx handle it */}
      {/* Remove ambient background effects - they conflict with Body's background */}

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-3 tracking-tight">
            {signupForm ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-gray-400 text-sm font-light tracking-wide">
            {signupForm ? 'Join us and start streaming today' : 'Ready to binge? Let\'s get you in.'}
          </p>
        </div>

        {/* Enhanced Login Form Container */}
        <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10 
          hover:border-red-500/30 transition-all duration-500 hover:shadow-red-500/10 hover:shadow-xl
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br 
          before:from-red-500/10 before:via-transparent before:to-white/5 
          before:blur-xl before:opacity-40 before:pointer-events-none 
          hover:scale-[1.01] group hover:bg-black/70">

          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/3 to-white/3 opacity-0 
            group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Enhanced Name Input */}
              {signupForm && (
                <div className="animate-in slide-in-from-top duration-300">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white 
                      placeholder-gray-500 text-sm focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 
                      focus:bg-white/10 outline-none transition-all duration-200 hover:bg-white/8 
                      hover:border-white/30 backdrop-blur-sm"
                    placeholder="Full Name"
                  />
                </div>
              )}

              {/* Enhanced Age Input */}
              {signupForm && (
                <div className="animate-in slide-in-from-top duration-300 delay-75">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    required
                    min="13"
                    max="120"
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white 
                      placeholder-gray-500 text-sm focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 
                      focus:bg-white/10 outline-none transition-all duration-200 hover:bg-white/8 
                      hover:border-white/30 backdrop-blur-sm"
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
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white 
                    placeholder-gray-500 text-sm focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 
                    focus:bg-white/10 outline-none transition-all duration-200 hover:bg-white/8 
                    hover:border-white/30 backdrop-blur-sm"
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
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white 
                    placeholder-gray-500 text-sm focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 
                    focus:bg-white/10 outline-none transition-all duration-200 hover:bg-white/8 
                    hover:border-white/30 backdrop-blur-sm"
                  placeholder="Password"
                />
              </div>

              {/* Enhanced Sign In / Up Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 
                  hover:from-red-700 hover:to-red-800 
                  text-white font-semibold py-3.5 px-4 mt-7
                  rounded-xl transition-all duration-200 transform hover:scale-[1.01] 
                  focus:outline-none focus:ring-2 focus:ring-red-500/30 shadow-lg 
                  shadow-red-600/20 hover:shadow-red-600/30 text-sm active:scale-[0.99]"
              >
                {signupForm ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            {/* Enhanced Forgot Password */}
            {!signupForm && (
              <div className="text-center mt-5">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-300 text-xs transition-all duration-200 
                    hover:underline underline-offset-2 hover:decoration-red-400/60"
                >
                  Forgot your password?
                </button>
              </div>
            )}

            {/* Enhanced Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 py-1 bg-black/80 text-gray-500 rounded-lg backdrop-blur-sm border border-white/10">
                  or
                </span>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div className="text-center">
              <p className="text-gray-500 text-xs">
                {signupForm ? 'Already have an account? ' : "Don't have an account? "}
                <button
                  type="button"
                  className="text-gray-300 hover:text-red-400 font-medium underline underline-offset-2 
                    decoration-gray-300/50 hover:decoration-red-400/70 transition-all duration-200 
                    hover:no-underline hover:bg-red-500/10 px-1.5 py-0.5 rounded-md"
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
