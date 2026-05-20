'use client';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    tag: "Welcome to IdeaVault",
    title: "Unlock Your Business's Full Potential",
    description: "The world's leading platform for sharing, nurturing, and launching groundbreaking startup ideas into successful ventures.",
    img: "https://i.ibb.co.com/SXvNNMCH/image.png",
    buttonText: "Explore Ideas",
  },
  {
    id: 2,
    tag: "The Vault Experience",
    title: "Where Innovations Meet The Right Minds",
    description: "Access a curated library of high-potential business models. Connect with co-founders, advisors, and build your dream team.",
    img: "https://i.ibb.co.com/LdFnyYm1/image.png",
    buttonText: "Find Co-founders",
  },
  {
    id: 3,
    tag: "Launch Your Vision",
    title: "Your Next Big Startup Idea Starts Here",
    description: "Join over 50,000+ entrepreneurs. Secure your IP, get expert feedback, and transform raw thoughts into scalable enterprises.",
    img: "https://i.ibb.co.com/9k3GdTMc/image.png",
    buttonText: "Submit Your Idea",
  }
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-linear-to-br from-[#0f041c] via-[#220644] to-[#0a0214] text-white min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center">
      
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay scale-105 transition-transform duration-[5000ms] ease-linear"
              style={{ backgroundImage: `url(${slide.img})`, transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)' }}
            />
            
            <div className="absolute inset-0 bg-linear-to-tr from-[#110320]/80 via-transparent to-[#2e085c]/40 z-10" />

            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[140px] pointer-events-none z-10"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/25 rounded-full blur-[140px] pointer-events-none z-10"></div>

            <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 text-center">
              
              <div className={`transition-all duration-700 delay-300 flex flex-col items-center ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-400 mb-5 block">
                  {slide.tag}
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 max-w-4xl leading-tight bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
                  {slide.title}
                </h1>

                <p className="text-base md:text-xl text-gray-200 max-w-3xl leading-relaxed mb-10 font-sans">
                  {slide.description}
                </p>
                
                <button className="bg-linear-to-r from-purple-600 to-fuchsia-500 text-white px-9 py-4 rounded-full font-heading font-bold text-base md:text-lg shadow-xl shadow-purple-500/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-purple-500/50 cursor-pointer inline-flex items-center gap-2.5">
                  {slide.buttonText}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex gap-3 justify-center z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? "w-10 bg-fuchsia-500" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}