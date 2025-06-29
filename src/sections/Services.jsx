import React from "react";
import weddingBg from "../assets/br1.jpg"; // ✅ React-style import
import bg from "../assets/abc2.jpg";
const Services = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${weddingBg})`, // ✅ use imported image
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
            💍 You're Invited to Our Wedding 💐
          </h1>
        </div>

        <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="backdrop-blur-md bg-white/30 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-4xl w-full text-center text-white">
            <h1 className="text-5xl font-extrabold tracking-wider text-white drop-shadow-md mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Jitin & Priya
            </h1>
            <p className="text-lg font-light mb-10">
              We invite you to celebrate the beginning of our forever.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6">
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-md">
                <h3 className="text-xl font-semibold mb-1">Wedding Date</h3>
                <p className="text-pink-100 text-lg">26th December 2025</p>
              </div>
              <div className="bg-white/20 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-md">
                <h3 className="text-xl font-semibold mb-1">Venue</h3>
                <p className="text-pink-100 text-lg">Vivanta by Taj, Lucknow</p>
              </div>
            </div>

            <div className="w-3 h-3 bg-pink-500 rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
