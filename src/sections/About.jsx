import React from "react";
import a5 from "../assets/vishu.jpeg";
import a4 from "../assets/vishu1.jpeg";

const ArtistHero = () => {
  return (
    <div className="min-h-full p-8 bg-white flex items-center justify-center text-black px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">

        {/* 🎨 a5 Image (Main Artwork) */}
        <div className="relative w-full sm:w-[80%] md:w-[70%] mx-auto">
          <img
            src={a5}
            alt="Artwork"
            className="border-4 h-96 sm:h-72 md:h-96 border-white  border-spacing-7 w-full object-cover rounded-lg"
          />
        </div>

        {/* 🧑‍🎨 a4 Image (Artist) */}
        <img
          src={a4}
          alt="Artist"
          className="
            absolute
            top-64
            right-[55%] 
            w-32 h-44 
            sm:w-36 sm:h-52
            md:w-44 md:h-60
            object-cover border-2 border-white rounded-sm shadow-xl
            transform -translate-y-1/2
            sm:right-[50%] sm:top-60
            md:right-[53%] md:top-80
          "
        />

        {/* ✍️ Text Content */}
        <div className="space-y-6 z-10 text-center md:text-left px-2">
          <h3 className="text-xs sm:text-sm font-medium tracking-widest text-gray-400 uppercase">
            Welcome To
          </h3>
          <h1 className="text-4xl sm:text-5xl leading-[1.2] font-[serif] text-purple-900 uppercase font-bold" style={{
            textShadow: "1px 1px 3px #000000", fontSize: "42px", whiteSpace: "nowrap"

          }}>
            Jitin Studio
          </h1>






          <p className="text-sm text-gray-500 leading-relaxed">
            Step into  Jitin Studio, where passion meets precision in every frame. With expertise spanning portraits, landscapes, and events, our award-winning studio transforms moments into timeless treasures. Let us capture your story with creativity and flair, ensuring memories that last a lifetime.
          </p>
          <button className="mt-4 px-6 py-2 rounded-full border border-black hover:bg-white hover:text-black transition duration-300 text-xs sm:text-sm tracking-widest">
            GET Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistHero;
