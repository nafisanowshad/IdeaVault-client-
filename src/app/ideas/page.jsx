'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function IdeasPage() {
  const [ideas, setIdeas] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas`); 
        const data = await res.json();
        setIdeas(data);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []);

  const categories = ['All', ...new Set(ideas.map((idea) => idea.category))];

  const displayedIdeas = ideas.filter((idea) => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || idea.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-7 py-12 bg-[#0f041c] min-h-screen text-white">
      
      <div className="w-full flex justify-start items-center py-12">
        <h2 className="group relative inline-block m-0 h-auto bg-transparent px-8 uppercase tracking-[4px] text-white text-3xl sm:text-4xl md:text-5xl font-heading font-black select-none cursor-default">
        Explore Ideas
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 mb-12 px-8">
       
        <div className="flex-grow relative">
          <input
            type="text"
            placeholder="Search ideas by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#16042c] border border-purple-950/60 rounded-xl px-5 py-3.5 pl-11 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-purple-600/50 focus:border-purple-500 transition-all placeholder:text-gray-500"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.601Z" />
          </svg>
        </div>

        <div className="md:w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-[#16042c] border border-purple-950/60 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-purple-600/50 focus:border-purple-500 transition-all cursor-pointer appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23a855f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-[#0f041c] text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loading && (
        <div className="text-center text-gray-400 py-12 text-lg animate-pulse">
          Loading amazing ideas...
        </div>
      )}

      {!loading && displayedIdeas.length === 0 && (
        <div className="text-center text-gray-500 py-12 text-lg border border-dashed border-purple-950/40 rounded-2xl max-w-7xl mx-auto mx-8">
          No ideas found matching your criteria.
        </div>
      )}

      {!loading && (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {displayedIdeas.map((idea) => (
            <div
              key={idea._id || idea.id} 
              className="bg-[#16042c]/95 border border-purple-950/40 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 group"
            >
              <div>
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={idea.img}
                    alt={idea.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#16042c] to-transparent opacity-60" />
                </div>

                <div className="p-6 pb-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full">
                      {idea.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3.5 h-3.5 text-purple-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      {idea.views}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-200 line-clamp-1">
                    {idea.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {idea.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex flex-col">
                <div className="flex items-center gap-1.5 mb-4 text-xs font-bold text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-fuchsia-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                  {idea.votes} Upvotes
                </div>

                <Link 
                  href={`/details/${idea._id || idea.id}`} 
                  className="bg-[#1b144c] hover:bg-linear-to-r hover:from-purple-600 hover:to-fuchsia-500 text-white py-3 px-5 rounded-xl font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}