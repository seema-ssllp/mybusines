import React, { useState } from "react";
import hero from "../assets/a5.jpg";
import couple from "../assets/a5.jpg";
import slide1 from "../assets/a5.jpg";
import slide2 from "../assets/a5.jpg";
import slide3 from "../assets/a5.jpg";
import slide4 from "../assets/a5.jpg";

const images = [slide1, slide2, slide3, slide4];

const WeddingPage = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleSlides = 4;

  const next = () => {
    if (startIndex < images.length - visibleSlides) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="font-serif text-gray-800">
      {/* 1. Hero Slider Section with Triangle Shape */}
      <section className="relative overflow-hidden">
        <div className="h-[400px] relative clip-triangle bg-black/20">
          <img
            src={hero}
            alt="Wedding Hero"
            className="absolute w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Seema & Rahul</h1>
            <p className="mt-2 text-sm md:text-base">Together Forever Starts Here</p>
          </div>
        </div>
      </section>

      {/* 2. About Couple - New Design */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
          <div>
            <h2 className="text-4xl font-bold text-pink-800 mb-4">Our Love Story</h2>
            <p className="text-gray-700 text-sm">
              We first met under the stars, and from that day, every moment has been magical.
              From awkward first hellos to late night long calls, we've grown, laughed, and
              dreamed together. Now we're ready to start the next beautiful chapter.
            </p>
          </div>
          <img src={couple} alt="Couple" className="rounded-3xl shadow-xl" />
        </div>
      </section>

      {/* 3. Wedding Services - Enhanced Look */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">Wedding Highlights</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { title: "Grand Venue", icon: "🏰" },
              { title: "Gourmet Cuisine", icon: "🍽️" },
              { title: "Dream Photography", icon: "📷" },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-pink-100 rounded-3xl shadow-lg hover:scale-105 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-pink-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Image Gallery Slider */}
      <section className="py-20 bg-pink-50">
        <h2 className="text-4xl font-bold text-center text-pink-800 mb-10">Captured Moments</h2>
        <div className="relative max-w-6xl mx-auto px-4">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-pink-300 text-pink-600 p-2 rounded-full shadow hover:bg-pink-100"
          >
            ◀
          </button>
          <div className="flex overflow-hidden gap-6 justify-center px-12">
            {images.slice(startIndex, startIndex + visibleSlides).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="h-[300px] w-[220px] object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-pink-300 text-pink-600 p-2 rounded-full shadow hover:bg-pink-100"
          >
            ▶
          </button>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-pink-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Designed for Seema & Rahul's Wedding Celebration</p>
      </footer>
    </div>
  );
};

export default WeddingPage;

// Custom Tailwind clip-path style
// Add to your global CSS or Tailwind config (tailwind.config.js -> extend -> clipPath)
// clipPath: {
//   triangle: 'polygon(0 0, 100% 0, 50% 100%)',
// }
// Or use with `clip-path: polygon(0 0, 100% 0, 50% 100%)` in plain CSS
