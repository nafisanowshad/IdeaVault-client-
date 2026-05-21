'use client';

export default function ExtraSection() {
  return (
    <div className="w-full bg-[#0a0214] text-gray-400 font-sans border-t border-purple-950/20">

      {/* Ratings Section */}
      <section className="w-full bg-[#0a0214] max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
      
      <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-3 tracking-tight">
        The Launchpad for High-Growth Startups
      </h3>
      <p className="text-sm text-gray-500 max-w-xl mx-auto mb-12">
        Join thousands of founders, builders, and early-stage investors who trust our ecosystem to validate and scale their next big thing.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {[
          { 
            name: "Product Hunt", 
            badge: "#1 Product of the Day", 
            rating: "4.9/5", 
            reviews: "1.2k upvotes", 
            color: "text-[#da552f]" 
          },
          { 
            name: "G2 Crowd", 
            badge: "Leader in Validation", 
            rating: "4.8/5", 
            reviews: "340+ reviews", 
            color: "text-[#ff492c]" 
          },
          { 
            name: "BetaList", 
            badge: "Top Startup Hub", 
            rating: "4.7/5", 
            reviews: "Trending Tech", 
            color: "text-[#2990ea]" 
          },
          { 
            name: "Indie Hackers", 
            badge: "Community Choice", 
            rating: "5.0/5", 
            reviews: "Trusted by Builders", 
            color: "text-[#5045d2]" 
          }
        ].map((platform, i) => (
          <div 
            key={i} 
            className="bg-[#130624]/40 border border-purple-950/40 p-6 rounded-2xl backdrop-blur-xs flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-heading font-black text-base sm:text-lg text-white tracking-tight">
                <span className={`${platform.color} mr-1.5 text-xs sm:text-sm`}>●</span>
                {platform.name}
              </span>
            </div>

            <span className="text-[10px] uppercase tracking-wider font-semibold text-fuchsia-400 bg-fuchsia-500/5 px-2 py-0.5 rounded-md mb-3">
              {platform.badge}
            </span>

            <div className="flex flex-col items-center gap-0.5 text-xs font-bold text-gray-200">
              <span className="flex items-center gap-1 text-sm">
                <span className="text-amber-400">★</span> {platform.rating}
              </span>
              <span className="text-[11px] font-normal text-gray-500">
                {platform.reviews}
              </span>
            </div>

          </div>
        ))}
      </div>
    </section>

      {/* Live Challenge Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#16042c] to-[#0d031a] border border-purple-500/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full mb-4 inline-block">
              Active Community Spark
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-3">
              This Week's Micro-SaaS Challenge is Live!
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Submit your unique execution plan for an AI workflow tool before Friday. Winning concepts receive validation credits and mentor matching.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
            <div className="text-left hidden sm:block md:mr-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Remaining Time</p>
              <p className="text-lg font-mono font-bold text-white">2d : 14h : 45m</p>
            </div>
            <button className="w-full md:w-auto bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-fuchsia-500/10 transition-all cursor-pointer text-center whitespace-nowrap">
              Join Challenge
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}