'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-[#110320] via-[#16042c] to-[#2e085c] text-white px-6 py-12 md:px-12 lg:px-20 border-t border-purple-950/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-800 pb-10 gap-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Turn your raw ideas into successful startups
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="border border-gray-600 hover:bg-white/10 px-5 py-2.5 rounded-xl font-medium transition duration-200 text-sm md:text-base transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-gray-500/40 cursor-pointer">
              Join Community
            </button>
            <button className="bg-linear-to-r from-purple-600 to-fuchsia-500 text-white hover:opacity-100 px-5 py-2.5 rounded-3xl font-medium text-sm md:text-base shadow-lg shadow-purple-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/40 cursor-pointer">
              Share Your Idea
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 py-12">
          
          <div className="md:col-span-1 flex flex-col space-y-4">
            <h3 className="font-semibold text-sm tracking-wide text-gray-200">
              Subscribe to news updates*
            </h3>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-white text-black px-4 py-3 rounded-lg focus:outline-none placeholder:text-gray-400 text-sm"
            />
            <p className="text-[11px] text-gray-400 leading-relaxed">
              * By submitting this form, you confirm that you agree to the storing and processing of your personal data as described in our <Link href="/privacy" className="underline hover:text-purple-400">Privacy Notice</Link>.
            </p>
            <button className="text-xs font-bold uppercase tracking-wider text-left flex items-center hover:text-purple-400 transition duration-200">
              SUBSCRIBE &rarr;
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-gray-400 font-medium text-sm">Platform Links</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="#" className="hover:text-purple-400 transition">Ideas</Link>
              <Link href="#" className="hover:text-purple-400 transition">Categories</Link>
              <Link href="#" className="hover:text-purple-400 transition">Add New Idea</Link>
              <Link href="#" className="hover:text-purple-400 transition">Trending Ideas</Link>
              <Link href="#" className="hover:text-purple-400 transition">Pricing</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-gray-400 font-medium text-sm">Solutions</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="#" className="hover:text-purple-400 transition">How-to guides</Link>
              <Link href="#" className="hover:text-purple-400 transition">Success stories</Link>
              <Link href="#" className="hover:text-purple-400 transition">Templates</Link>
              <Link href="#" className="hover:text-purple-400 transition">Partner directory</Link>
              <Link href="#" className="hover:text-purple-400 transition">Idea exchange</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-gray-400 font-medium text-sm">Contact & Support</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="#" className="hover:text-purple-400 transition">Help Center</Link>
              <Link href="#" className="hover:text-purple-400 transition">Community</Link>
              <Link href="#" className="hover:text-purple-400 transition">Contact us</Link>
              <Link href="#" className="hover:text-purple-400 transition">Blog</Link>
              <Link href="#" className="hover:text-purple-400 transition">Webinars</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-gray-400 font-medium text-sm">Company</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-300">
              <Link href="#" className="hover:text-purple-400 transition">About</Link>
              <Link href="#" className="hover:text-purple-400 transition">Careers</Link>
              <Link href="#" className="hover:text-purple-400 transition">Terms & conditions</Link>
              <Link href="#" className="hover:text-purple-400 transition">Privacy and GDPR</Link>
              <Link href="#" className="hover:text-purple-400 transition">Disclaimer</Link>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-900 gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} IdeaVault, Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-5 text-lg">
            <Link href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}