'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photoUrl: '',
    password: ''
  });

  const passwordCriteria = {
    minLength: formData.password.length >= 6,
    hasUpper: /[A-Z]/.test(formData.password),
    hasLower: /[a-z]/.test(formData.password),
  };

  const isPasswordValid = Object.values(passwordCriteria).every(Boolean);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid) {
      alert('Password must be at least 6 characters long and include both uppercase (A-Z) and lowercase (a-z) letters.');
      return;
    }
    console.log('Registration Data:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-[#f9fafb] flex flex-col md:flex-row font-sans">
      
      <div className="w-full md:w-[45%] flex items-center justify-center p-8 lg:p-16 bg-white">
        <div className="w-full max-w-sm">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
            Create your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Photo URL
              </label>
              <input 
                type="url" 
                name="photoUrl" 
                value={formData.photoUrl}
                onChange={handleChange}
                placeholder="https://example.com/avatar.jpg"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all text-gray-900" 
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Password <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all text-gray-900"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.466 7.466 3 3m-3-3-4.516-4.516M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full text-white font-medium py-3 rounded-lg text-sm shadow-md transition-all text-center bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 cursor-pointer"
            >
              Register Account
            </button>
          </form>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400 uppercase font-medium">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg text-sm transition-all cursor-pointer">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.65-5.17 3.65-8.58z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 5 12c0-.79.13-1.57.32-2.34V6.51H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.49l4.11-3.25z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.51l4.11 3.25c.94-2.85 3.57-4.96 6.68-4.96z"/>
            </svg>
            Sign up with Google
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account? <Link href="/login" className="text-purple-600 font-semibold hover:underline">Sign in</Link>
          </p>

        </div>
      </div>

      <div className="w-full md:w-[55%] bg-[#0f041c]/90 flex flex-col justify-between p-12 lg:p-20 relative overflow-hidden text-white">
        
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-left space-x-3 cursor-pointer">
          <div className="relative flex items-center justify-center w-18 h-18 rounded-full bg-linear-to-tr from-purple-600 to-indigo-500 shadow-md">
            <svg 
              className="w-12 h-13 text-white transform -rotate-12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold tracking-tight text-white leading-none">
              Idea<span className="text-[#a855f7]">Vault</span>
            </span>
            <span className="text-[20px] text-gray-400 tracking-wider mt-0.5">
              Startup Idea Sharing Platform
            </span>
          </div>
        </div>

        <div className="max-w-xl my-auto z-10 py-12 md:py-0">
          <h1 className="text-4xl lg:text-5xl font-heading font-black text-white tracking-tight mb-4 leading-[1.15]">
            Join the collective brainwave <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
              #withIdeaVault
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">
            Turn your spark into reality. Share raw blueprints, get real-time validation, and build tomorrow's micro-SaaS with a community of innovative founders.
          </p>
        </div>

        <div className="text-xs text-gray-500 font-medium z-10 flex flex-wrap gap-x-3 gap-y-1">
          <span>Trusted by 10,000+ Founders</span>
          <span className="text-gray-700">|</span>
          <span>100% Secure Crypt Vault</span>
        </div>

      </div>

    </div>
  );
}