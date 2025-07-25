import React, { useState } from "react";
import hero from "../assets/a1.jpg";
import couple from "../assets/a2.jpg";
import slide1 from "../assets/a3.jpg";
import slide2 from "../assets/a5.JPG";
import slide3 from "../assets/a5.JPG";
import slide4 from "../assets/a5.JPG";
import bgImage from "../assets/s2.jpg";

import {
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaFileAlt,
  FaFilePowerpoint,
  FaFilePdf,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe className="text-5xl text-indigo-400 mx-auto mb-4" />,
    title: "Website Development",
    desc: "Responsive, fast, and secure websites & apps tailored to your needs using modern tech stacks.",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-pink-400 mx-auto mb-4" />,
    title: "Mobile App",
    desc: "Smooth, scalable Android & iOS apps with powerful performance and user-friendly UI.",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-yellow-400 mx-auto mb-4" />,
    title: "Brochure & Folder Design",
    desc: "Premium Canva & custom graphics for eye-catching brochures, folders, and banners.",
  },
  {
    icon: <FaFileAlt className="text-5xl text-blue-400 mx-auto mb-4" />,
    title: "Document Design",
    desc: "Clean business docs, company profiles, resumes, and branded reports with a professional look.",
  },
  {
    icon: <FaFilePowerpoint className="text-5xl text-red-400 mx-auto mb-4" />,
    title: "PPT Design",
    desc: "Stunning pitch decks & animated slide presentations with brand-aligned visuals.",
  },
  {
    icon: <FaFilePdf className="text-5xl text-green-400 mx-auto mb-4" />,
    title: "Search Engine Optimization",
    desc: "Search Engine Optimization (SEO) helps improve your website’s visibility on search engines. It drives organic traffic and boosts your online presence.",
  },
];

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
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[400px]">
        <img
          src={hero}
          alt="Hero"
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
          <p className="mt-2 text-sm md:text-base">
            App Development, Digital Marketing, Product Design, and Cloud Services.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4">
          <div>
            <h2 className="text-4xl font-bold text-pink-800 mb-4">💡 What We Offer:</h2>
            <div className="text-gray-700 text-sm space-y-2">
              <div>🌐 Responsive Web Design & Development</div>
              <div>📱 iOS & Android App Development</div>
              <div>📊 Corporate Presentations & Pitch Decks</div>
              <div>🖼️ Logo, Posters, Banners, Ads</div>
              <div>📣 Digital Marketing – SEO, SMM, Google Ads</div>
              <div>☁️ Cloud & Hosting Solutions</div>
              <div>🎯 Social Media Management</div>
            </div>
          </div>
          <img src={couple} alt="Couple" className="rounded-3xl shadow-xl" />
        </div>
      </section>



      {/* Premium Services Section */}
      <section
        className="relative py-20 px-4 sm:px-8 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-extrabold text-center mb-14 drop-shadow-lg">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 text-center"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">
            Technology We Use
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "React JS",
                icon: "⚛️",
                description: "Build fast, dynamic user interfaces. Perfect for modern web applications.",
              },
              {
                title: "Node.js & Express",
                icon: "🟩",
                description: "High-performance backend with Express for scalable REST APIs.",
              },
              {
                title: "PHP Laravel",
                icon: "🐘",
                description: "Elegant backend development with Laravel's MVC framework.",
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="p-6 bg-pink-100 rounded-3xl shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-pink-800 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-pink-900 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Our Premium Services
        </p>
      </footer>
    </div>
  );
};

export default WeddingPage;
