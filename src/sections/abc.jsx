import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import aboutBg from "../assets/about.jpg";
import aboutImg from "../assets/s3.jpg";
import bgSectionImg from "../assets/sec.jpg"; // replace with any background image

const Abc = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[480px] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-emerald-400 drop-shadow-lg">
          About Us
        </h1>
      </div>

      {/* About Company Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="text-gray-800">
            <h2 className="text-3xl font-bold mb-4">About SG CODER</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              We deliver world-class services in Web Development, Mobile App Development,
              and Branding. With 30+ successful projects, we offer innovative, secure, and user-friendly digital solutions tailored to your business needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>✔ 30+ Projects Delivered Successfully</li>
              <li>✔ Custom MERN Stack Web & App Solutions</li>
              <li>✔ SEO, Social Media, Branding & Cloud Services</li>
              <li>✔ Affordable Pricing with On-time Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Background Scroll Section */}
      <section
        className="relative w-full bg-fixed bg-center bg-cover py-32 px-4 sm:px-10"
        style={{ backgroundImage: `url(${bgSectionImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Build a Digital Identity That Stands Out
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mb-8 text-white/90"
          >
            Elevate your brand with stunning websites, powerful apps, and smart marketing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/about">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Software Company Projects Section */}
      <section className="bg-white py-20 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Software Company Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We build custom software, websites, and mobile apps for businesses and startups. From idea to final deployment – we handle everything.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-emerald-600">🧾</div>
              <h3 className="text-xl font-semibold mb-2">Billing Management App</h3>
              <p className="text-gray-600 text-sm">
                Designed and developed a complete GST billing web application with admin panel, print system, and client database.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-indigo-600">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Hospital Website</h3>
              <p className="text-gray-600 text-sm">
                Created a custom website for a hospital with doctor management, appointment booking, and report upload system.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 text-pink-600">🛒</div>
              <h3 className="text-xl font-semibold mb-2">E-Commerce App</h3>
              <p className="text-gray-600 text-sm">
                Built a full-stack MERN-based ecommerce application with payment gateway, cart, and dashboard for product management.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <h4 className="text-lg text-gray-800 font-semibold mb-4">Looking to build your own project?</h4>
            <Link to="/contact">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition">
                Let's Work Together
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abc;
