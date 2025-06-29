import React from "react";
import footerBg from "../assets/abc.jpg";

const Footer = () => {
  return (
    <footer className="text-white" style={{ fontFamily: "-moz-initial" }}>
      <div className="relative w-full text-white overflow-hidden font-sans">
        {/* Top Section: Subscription */}
        <div
          className=""
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 tracking-tight">
              Subscribe and Join Our Free Community
            </h2> */}
            {/* <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-5 py-3 rounded-lg w-full sm:w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-5 py-3 rounded-lg w-full sm:w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300"
              >
                Subscribe Now!
              </button>
            </form> */}
          </div>
        </div>

        {/* Custom SVG Footer Shape */}


        {/* Footer Content */}
        <div className="bg-[#007BCE] text-white px-6 py-14">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-3xl font-extrabold mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-white text-4xl">👨‍👩‍👧‍👦</span>
                  Our Child’s Keeper
                </div>
              </div>
              <div className="flex gap-4 mt-4 text-xl">
                {["facebook-f", "instagram", "pinterest", "linkedin-in", "twitter"].map((icon) => (
                  <a key={icon} href="#" className="hover:opacity-80 transition">
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Get Started</h3>
                <ul className="space-y-2 opacity-90">
                  <li>Community</li>
                  <li>Why It Matters</li>
                  <li>Baby Safety</li>
                  <li>Masterclass</li>
                  <li>Sign Up</li>
                  <li>Login In</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Company</h3>
                <ul className="space-y-2 opacity-90">
                  <li>Meet Our Family</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Partner With Us</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Explore</h3>
                <ul className="space-y-2 opacity-90">
                  <li>Reviews</li>
                  <li>Press</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Legal</h3>
                <ul className="space-y-2 opacity-90">
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Disclaimers</li>
                  <li>Data Resources</li>
                  <li>No Risk Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-xs mt-12 opacity-70">
            © 2025 Our Child's Keeper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
