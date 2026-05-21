'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path, isMobile = false) => {
    const isActive = pathname === path;
    const baseClass = isMobile ? "text-lg font-medium transition duration-200" : "font-medium transition duration-200";
    
    return isActive 
      ? `${baseClass} text-[#a855f7]` 
      : `${baseClass} text-white hover:text-[#a855f7]`;
  };

  return (
    <nav className="w-full bg-[#1e0741] px-4 py-4 md:px-12 md:py-5 border-b border-purple-950/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-tr from-purple-600 to-indigo-500 shadow-md">
            <svg 
              className="w-6 h-6 text-white transform -rotate-12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-white leading-none">
              Idea<span className="text-[#a855f7]">Vault</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider mt-0.5">
              Startup Idea Sharing Platform
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-5 lg:space-x-10">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/ideas" className={getLinkClass("/ideas")}>
            Ideas
          </Link>
          <Link href="/add-idea" className={getLinkClass("/add-idea")}>
            Add Idea
          </Link>
          <Link href="/my-ideas" className={getLinkClass("/my-ideas")}>
            My Ideas
          </Link>
          <Link href="/my-interactions" className={getLinkClass("/my-interactions")}>
            My Interactions
          </Link>
        </div>

        <div className="flex items-center space-x-3 md:space-x-0">
          <Link href="/login">
          <button className="bg-linear-to-r from-purple-600 to-fuchsia-500 text-white hover:opacity-100 px-5 py-2.5 rounded-3xl font-medium text-sm md:text-base shadow-lg shadow-purple-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/40 cursor-pointer">
          Login
          </button>
          </Link>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        <div className="absolute right-0 top-0 h-full w-64 bg-[#14052c] p-6 shadow-2xl flex flex-col justify-between">
          <div className="flex flex-col space-y-6 mt-16">
            <Link href="/" onClick={() => setIsOpen(false)} className={getLinkClass("/", true)}>
              Home
            </Link>
            <Link href="/ideas" onClick={() => setIsOpen(false)} className={getLinkClass("/ideas", true)}>
              Ideas
            </Link>
            <Link href="/add-idea" onClick={() => setIsOpen(false)} className={getLinkClass("/add-idea", true)}>
              Add Idea
            </Link>
            <Link href="/my-ideas" onClick={() => setIsOpen(false)} className={getLinkClass("/my-ideas", true)}>
              My Ideas
            </Link>
            <Link href="/my-interactions" onClick={() => setIsOpen(false)} className={getLinkClass("/my-interactions", true)}>
              My Interactions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}