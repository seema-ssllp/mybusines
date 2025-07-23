import React from "react";

const Footer = () => {
  return (
    <footer className="text-white" style={{ fontFamily: "-moz-initial" }}>
      <div className="relative w-full text-white overflow-hidden font-sans">

        {/* Footer Content */}
        <div className="bg-[#093858] text-white px-6 py-14">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">

            {/* Logo and Contact */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-3xl font-extrabold mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-white text-4xl">SG..CODER</span>

                  {/* Animated Teddy */}
                  <div className="relative w-[120px] h-[100px] overflow-hidden">
                    <img
                      src="/me3.png"
                      alt="Animated Teddy"
                      className="absolute h-[100px] w-[100px] object-contain animate-teddyRun"
                      style={{
                        animation: "teddyRun 4s ease-in-out infinite",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm opacity-90">
                <p>Plot no. 18 Kapish Bihar, Uttardhuna,</p>
                <p>Tiwariganj, Lucknow, Uttar Pradesh – 226028</p>
                <p className="mt-2">WhatsApp: +91 8005163696</p>
                <p>Phone: +91 8005163696</p>
                <p>Email: seemagupta800516@gmail.com</p>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Company</h3>
                <ul className="space-y-2 opacity-90">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Our Services</h3>
                <ul className="space-y-2 opacity-90">
                  <li>Hire Dedicated Developers</li>
                  <li>Web App Development</li>
                  <li>Mobile App Development</li>
                  <li>Search Engine Optimization</li>
                  <li>Payment Gateway Integration</li>
                  <li>Social Media Marketing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Contact</h3>
                <ul className="space-y-2 opacity-90">
                  <li>WhatsApp: +91 8005163696</li>
                  <li>Phone: +91 8005163696</li>
                  <li>Email: seemagupta800516@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-xs mt-12 opacity-70">
            © Copyright 2025 SG CODER. All Rights Reserved.
          </p>
        </div>

        {/* Animation CSS */}
        <style>
          {`
            @keyframes teddyRun {
              0% {
                left: -120px;
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              50% {
                left: 50%;
                transform: translateX(-50%);
              }
              90% {
                opacity: 1;
              }
              100% {
                left: 120%;
                opacity: 0;
              }
            }

            .animate-teddyRun {
              position: absolute;
              top: 0;
            }
          `}
        </style>
      </div>
    </footer>
  );
};

export default Footer;
