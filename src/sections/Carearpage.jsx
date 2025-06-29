import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import carear1 from "../assets/br1.jpg"; // Main background image
import { FaWhatsapp } from "react-icons/fa";
import carear from "../assets/a5.jpg";
const jobOpenings = [
  {
    designation: "Electrical Engineer",
    positions: 4,
    experience: "5 + years",
    industry: "Power Plant Industrial Electricity System",
    location:
      "Corporate Park A1 Tower 9th Floor Office No.903 Sector 142 Noida UP-201305",
  },
  {
    designation: "Chartered Accountant",
    Department: "Financial Accounting",
    positions: 2,
    experience: "5 + years",
    industry: "Power Plant Industrial Electricity System",
    location:
      "Corporate Park A1 Tower 9th Floor Office No.903 Sector 142 Noida UP-201305",
  },
];

const Carearpage = () => {
  const scrollToBottom = () => {
    document
      .getElementById("bottom-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const phoneNumber = "8287869219";

  return (
    <div className="w-full font-sans bg-black text-white">
      {/* HERO Section with fixed background */}
      <div
        className="relative h-[80vh] w-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${carear})` }}
      >
        <div className="relative z-10 h-full flex items-end justify-center pb-20 bg-black/40">
          <div className="bg-white/20 backdrop-blur-md p-2 md:p-8 rounded-3xl shadow-xl text-white max-w-2xl text-center">
            <h1
              className="text-2xl md:text-5xl font-bold mb-3 animate-pulse"
              style={{ fontFamily: "Animated" }}
            >
              CAREER
            </h1>
            <p className="text-md md:text-xl font-light">
              Join our passionate team and grow your future with us.
            </p>
          </div>
        </div>

        <button
          onClick={scrollToBottom}
          className="absolute bottom-6 right-6 z-20 bg-white/30 hover:bg-white/50 text-white backdrop-blur-md rounded-full p-3 shadow-md transition"
          title="Scroll to Bottom"
        >
          ↓
        </button>
      </div>

      {/* Job Openings Section */}
      <div className="py-16 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-pink-300">
          Current Openings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:rotate-1 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                {job.designation}
              </h3>
              <p>
                <strong>Positions:</strong> {job.positions}
              </p>
              <p>
                <strong>Experience:</strong> {job.experience}
              </p>
              {job.Department && (
                <p>
                  <strong>Department:</strong> {job.Department}
                </p>
              )}
              <p>
                <strong>Industry:</strong> {job.industry}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                <span className="text-sm text-gray-300">
                  {job.location}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Contact Section */}
      <div
        id="bottom-section"
        className="relative h-[80vh] bg-fixed bg-center bg-cover text-white overflow-y-auto"
        style={{ backgroundImage: `url(${carear1})` }}
      >
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Scrollable content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-10 text-center overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-xl">
            Want to Apply or Have Questions?
          </h2>
          <p className="mb-6 text-lg drop-shadow-sm">
            Connect with us instantly on WhatsApp!
          </p>
          <a
            href={`https://wa.me/91${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full text-white shadow-xl text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Chat Now
          </a>
        </div>
      </div>

    </div>
  );
};

export default Carearpage;
