import React, { useState } from "react";
import bride from "../assets/see10.jpg";
import floralBg from "../assets/see8.jpg";

const BridalWeddingClean = () => {
  const tabs = [
    {
      title: "Our Mission",
      content:
        "To empower businesses by delivering cutting-edge digital solutions that drive growth, innovation, and customer success.",
    },
    {
      title: "Our Vision",
      content:
        "To be the most trusted IT partner, creating lasting value through smart technology and forward-thinking strategies.",
    },
    {
      title: "Our Commitment",
      content:
        "We commit to excellence, transparency, and client satisfaction in every project, big or small.",
    },
    {
      title: "Core Values",
      content:
        "Innovation, Integrity, Quality, and Collaboration – the foundation of every solution we build.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="relative bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${floralBg})`,
      }}
    >
      <div className="min-h-screen max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Tab Content */}
        <div className="w-full md:w-1/2 text-white">
          <p className="text-lg md:text-2xl font-bold mb-6 leading-tight">
            Transform Your Business With{" "}
            <span className="text-white">The Leading IT Solution Provider</span>
          </p>
          <p className="text-white/80 mb-10 text-lg max-w-lg">
            We combine passion, expertise, and technology to deliver results that matter.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2 rounded-full border text-sm sm:text-base transition-all duration-300 font-medium ${activeTab === index
                  ? "bg-pink-500 text-white"
                  : "bg-white/10 border-white/30 hover:bg-pink-500 hover:text-white"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-md max-w-xl">
            <h3 className="text-2xl font-semibold mb-3 text-pink-400">
              {tabs[activeTab].title}
            </h3>
            <p className="text-white/80">{tabs[activeTab].content}</p>
          </div>
        </div>

        {/* Right: Bride Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bride}
            alt="Bride"
            className="w-[80%] rounded-3xl shadow-2xl border-4 border-white/20"
          />
        </div>
      </div>
    </div>
  );
};

export default BridalWeddingClean;
