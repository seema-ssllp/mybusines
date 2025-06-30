import React, { useState } from "react";

import aboutBg from "../assets/a4.JPG";
import aboutImg from "../assets/mnager.jpg";
import img1 from "../assets/v5.jpg";
import img2 from "../assets/v3.jpg";
import img3 from "../assets/vishu1.jpeg";
import img4 from "../assets/a5.JPG";
import img5 from "../assets/mnager.jpg"; // Extra image to make slider scrollable

const images = [img1, img2, img3, img4, img5]; // 5 images for sliding

const Abc = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = images.length - itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[480px] bg-center bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-emerald-400">
          About Me
        </h1>
      </div>

      {/* About Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white py-10 px-6 md:px-20 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12 shadow-2xl rounded-xl">
          <div className="w-full md:w-1/2">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-xl shadow-xl w-full max-w-md h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <div className="text-base md:text-lg leading-relaxed space-y-4">
              <p>
                We specialize in crafting elegant wedding experiences filled with
                love, beauty, and timeless moments.
              </p>
              <p>
                Our mission is to bring your dream celebration to life with personalized details and heartfelt planning.
              </p>
              <p>
                Every love story is unique. That's why we tailor our services to reflect your individual journey, culture, and style.
              </p>
              <p>
                From venue selection to floral designs, every element is meticulously curated to leave lasting impressions.
              </p>
              <p>
                Our experienced team walks beside you at every step — ensuring your vision is seamlessly transformed into reality.
              </p>

              <p>
                Let us be a part of your journey — where dreams meet flawless execution.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Carousel Section */}
      <div className="bg-white py-12">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="w-1/4 px-2 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden shadow-md bg-white">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > itemsPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
              >
                &#10095;
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Abc;
