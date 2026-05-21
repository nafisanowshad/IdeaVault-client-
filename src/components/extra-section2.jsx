'use client';

const contributors = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Serial Entrepreneur",
    ideasValidated: 14,
    impactScore: "9.8k",
    avatar: "https://i.ibb.co.com/qFX9M5Pc/image.png",
    badge: "Master Builder"
  },
  {
    id: 2,
    name: "Ki Hong Lee",
    role: "Full-Stack Indie Hacker",
    ideasValidated: 11,
    impactScore: "7.4k",
    avatar: "https://i.ibb.co.com/279cPzZv/image.png",
    badge: "Top Validator"
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "AI Product Designer",
    ideasValidated: 9,
    impactScore: "6.1k",
    avatar: "https://i.ibb.co.com/sJHcV4F2/image.png",
    badge: "Rising Star"
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "SaaS Growth Hacker",
    ideasValidated: 8,
    impactScore: "5.9k",
    avatar: "https://i.ibb.co.com/wrSvqphf/image.png",
    badge: "Launch Expert"
  }
];

export default function ExtraSection2() {
  return (
    <section className="w-full bg-[#0a0214] max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full mb-3 inline-block">
            Ecosystem Elite
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tight">
            Top Startup Contributors
          </h3>
          <p className="text-sm text-gray-500 max-w-md mt-1">
            Meet the minds shaping tomorrow. Builders who are constantly validating concepts and helping others scale.
          </p>
        </div>
        
        <button className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors flex items-center gap-1 group cursor-pointer self-start md:self-auto">
          View All Leaderboard 
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contributors.map((user) => (
          <div 
            key={user.id}
            className="bg-[#130624]/90 border border-purple-950/40 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xs transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(217,70,239,0.06)] group"
          >

            <div className="absolute -inset-px bg-gradient-to-r from-purple-600/0 via-fuchsia-500/0 to-fuchsia-500/0 group-hover:from-purple-600/5 group-hover:via-fuchsia-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />

            <div className="flex flex-col items-center text-center relative z-10">
              
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-b from-purple-900/50 to-fuchsia-500/20 group-hover:from-purple-500 group-hover:to-fuchsia-400 transition-all duration-500">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0a0214] rounded-full">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse scale-150 opacity-40" />
                </span>
              </div>

              <h4 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-fuchsia-400">
                {user.name}
              </h4>
              <p className="text-xs text-gray-500 mb-3 font-medium">{user.role}</p>
              
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/10 px-2.5 py-0.5 rounded-md mb-5">
                {user.badge}
              </span>

              <div className="w-full grid grid-cols-2 gap-2 pt-4 border-t border-purple-950/40 text-left">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Validated</p>
                  <p className="text-sm font-bold text-gray-200">{user.ideasValidated} Ideas</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Impact</p>
                  <p className="text-sm font-bold text-fuchsia-400">⚡ {user.impactScore}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}