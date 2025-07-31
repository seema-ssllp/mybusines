import React from "react";
import a4 from "../assets/manager.jpg";
import a5 from "../assets/see12.jpg";


const ArtistHero = () => {
  return (
    <div className="min-h-full p-8 bg-white flex items-center justify-center text-black px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">

        {/* 🎨 a5 Image (Main Artwork) */}
        <div className="relative w-full sm:w-[80%] md:w-[70%] mx-auto">
          <img
            src={a5}
            alt="Artwork"
            className="border-2 h-96 sm:h-72 md:h-96 border-purple-800  border-spacing-7 w-full object-cover rounded-lg"
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
        <div className="space-y-6 z-10 text-center lg:text-left px-2">

          <h1
            className="
      text-xl           // base font size
      sm:text-2xl       // small devices
      md:text-3xl       // medium devices
      lg:text-xl       // large devices
      leading-snug
      font-[serif]
      text-purple-900
      lowercase
      font-bold
      whitespace-normal // allows wrapping
    "
            style={{
              textShadow: "1px 1px 3px #000000",
            }}
          >
            "Crafting Smart, Scalable, and Stunning Web Solutions."
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            I’m a passionate freelance full-stack web developer, dedicated to turning complex ideas into powerful digital experiences. With expertise in modern technologies like React.js, Node.js, MongoDB, and Tailwind CSS, I deliver fast, responsive, and user-friendly websites tailored to your unique needs.
          </p>

          <button className="
    mt-4
    px-6 py-2
    rounded-full
    border border-black
    hover:bg-white hover:text-black
    transition duration-300
    text-xs sm:text-sm
    tracking-widest
  ">
            GET Enquiry
          </button>
        </div>

      </div>
    </div>
  );
};

export default ArtistHero;
