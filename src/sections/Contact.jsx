import React from "react";
import bride from "../assets/abc2.jpg";
import floralBg from "../assets/a4.jpg";
import { motion } from "framer-motion";

const BridalWeddingClean = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${floralBg})`,
      }}
    >
      {/* Top Decorative Triangle */}

      {/* Content Section */}
      <div className="min-h-screen max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">

        {/* Left: Bride Image with Triangle Bottom */}
        <div className="w-full md:w-1/2 relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl relative">
            <img
              src={bride}
              alt="Bride"
              className="w-96 h-96  mt-9 object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
              }}
            />
          </div>
        </div>

        {/* Right: Animated Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 bg-white/20 backdrop-blur-lg text-white p-8 rounded-3xl shadow-xl border border-white/30"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Jitin ❤️ Priya
          </h2>
          <p className="mb-6 text-base md:text-lg text-white/90 leading-relaxed">
            Celebrate a beautiful journey of love, elegance, and tradition. Our hearts are full, and you're invited to witness our forever.
          </p>

          <div className="bg-white/30 rounded-xl p-4 space-y-2 text-sm md:text-base shadow-md">
            <p>💍 <strong>Wedding Date:</strong> 26th December 2025</p>
            <p>📍 <strong>Venue:</strong> Vivanta by Taj, Lucknow</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Triangle */}

    </div>
  );
};

export default BridalWeddingClean;
