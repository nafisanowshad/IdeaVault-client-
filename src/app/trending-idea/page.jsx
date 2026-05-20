"use client";

import Link from "next/link";

const ideas = [
  {
    id: 1,
    category: "AI & SaaS",
    title: "AI-Powered Legal Contract Analyzer",
    description:
      "Automates risk assessment in corporate legal documents, highlighting hidden clauses and non-compliance loops in seconds.",
    img: "https://i.ibb.co.com/xKBbnyf2/image.png",
    votes: 342,
    views: "1.2k",
  },
  {
    id: 2,
    category: "Fintech",
    title: "Micro-Investing Platform for Teens",
    description:
      "A gamified investment application educating the next generation on stock markets through safe, parent-monitored micro-transactions.",
    img: "https://i.ibb.co.com/vxK7kQKg/image.png",
    votes: 289,
    views: "980",
  },
  {
    id: 3,
    category: "HealthTech",
    title: "IoT Wearable for Elderly Fall Detection",
    description:
      "Smart medical-grade wristbands integrated with machine learning models to instantly alert emergency services and relatives during accidents.",
    img: "https://i.ibb.co.com/XfpKS2mM/image.png",
    votes: 512,
    views: "2.4k",
  },
  {
    id: 4,
    category: "EduTech",
    title: "VR-Based Immersive History Classrooms",
    description:
      "Virtual reality simulation modules allowing high school students to explore ancient civilizations and historical turning points interactively.",
    img: "https://i.ibb.co.com/xtsRSk78/image.png",
    votes: 198,
    views: "750",
  },
  {
    id: 5,
    category: "GreenTech",
    title: "Smart Solar Window Glass Panels",
    description:
      "Transparent photovoltaic window units tailored for skyscrapers to harness solar energy without compromising architectural aesthetics.",
    img: "https://i.ibb.co.com/rKRdQzg2/image.png",
    votes: 423,
    views: "1.8k",
  },
  {
    id: 6,
    category: "E-Commerce",
    title: "Hyper-Local AR Virtual Try-On Network",
    description:
      "Enables neighborhood clothing boutiques to offer precise augmented reality fitting experiences directly inside localized delivery apps.",
    img: "https://i.ibb.co.com/yFzkZ3YD/image.png",
    votes: 311,
    views: "1.1k",
  },
];

const TrendingPage = () => {
  const limit = 6;
  const displayedIdeas = ideas.slice(0, limit);

  return (
    <div className="p-7 py-12 bg-[#0f041c] min-h-screen text-white">
      <div className="w-full flex justify-start items-center py-12">
        <h2 className="group relative inline-block m-0 h-auto bg-transparent p-0 uppercase tracking-[4px] text-white text-3xl sm:text-4xl md:text-5xl font-heading font-black select-none cursor-default">
          &nbsp;Trending Ideas&nbsp;
          <span
            aria-hidden="true"
            className="absolute inset-0 block w-0 overflow-hidden box-border whitespace-nowrap text-fuchsia-500 border-r-[4px] border-fuchsia-500 transition-all duration-600 ease-in-out [-webkit-text-stroke:1px_#d946ef] group-hover:w-full group-hover:drop-shadow-[0_0_30px_#d946ef]"
          >
            &nbsp;Trending Ideas&nbsp;
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {displayedIdeas.map((idea) => (
          <div
            key={idea.id}
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

            <div className="p-6 pt-0">
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
                </svg >
                {idea.votes} Upvotes
              </div>

              <Link href="/details" className="bg-[#1b144c] hover:bg-linear-to-r hover:from-purple-600 hover:to-fuchsia-500 text-white py-3 px-5 rounded-xl font-heading font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer text-center">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
