import React, { useState } from "react";

import aboutBg from "../assets/about.jpg";
import aboutImg from "../assets/s3.jpg";
import img1 from "../assets/aaaa.jpg";
import img2 from "../assets/sec.jpg";
import img3 from "../assets/see6.jpg";
import img4 from "../assets/see10.jpg";
import img5 from "../assets/sec.jpg"; // Extra image to make slider scrollable

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
          About Us
        </h1>
      </div>

      {/* About Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white py-10 px-6 md:px-20 max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12 shadow-2xl rounded-xl">
          <div className="w-full md:w-1/2">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-xl shadow-xl w-full max-w-md h-96 object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 text-gray-800">
            <h2 className="text-lg md:text-xl font-bold mb-4"> About Us</h2>
            <div className="text-base md:text-sm leading-relaxed space-y-4">
              <p>
                Top-Rated Web & Mobile App Development Company

                At JANKIWEB INFOTECH, we blend innovation with technology to deliver top-tier solutions in Web Design, App Development, Digital Marketing, Product Design, and Cloud Services.

                With 30+ successful projects and collaborations across multiple industries, we specialize in creating powerful digital experiences that align with your business goals.


              </p>
              <h2 className="text-lg md:text-xl font-bold mb-4"> 🌟 Why Choose SG CODER</h2>

              ✅ 30+ Projects Delivered with proven results<br />

              ✅ Multiple Client Engagements with long-term partnerships<br />

              ✅ Expertise in Custom Website & Mobile App Development<br />

              ✅ End-to-End Design Solutions – from PPTs, Posters, Ads to Social Media Graphics<br />

              ✅ Dedicated team for Branding, UI/UX, SEO, and Online Campaigns<br />

              ✅ Strong reputation for on-time delivery, affordable pricing, and quality assurance<br />
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
