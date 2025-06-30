import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";


import gallery1 from "../assets/a5.JPG";
import gallery2 from "../assets/a5.JPG";
import gallery3 from "../assets/a5.JPG";
import gallery4 from "../assets/a5.JPG";
import gallery5 from "../assets/a5.JPG";
import gallery6 from "../assets/a5.JPG";
import client2 from "../assets/a5.JPG";
import client3 from "../assets/a5.JPG";
import client4 from "../assets/a5.JPG";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import client5 from "../assets/a5.JPG";
import client6 from "../assets/a5.JPG";

import client7 from "../assets/a5.JPG";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItem = [
    { link: "Home", path: "/" },
    { link: "About Us", path: "/about" },
    { link: "services", path: "/services" },
    { link: "Gallery", path: "/gallery" },
    { link: "Wedding Event", path: "/team-members" },
    { link: "Wedding Albums", path: "/successful-project" },
    // { link: "Full wedding setup", path: "/resources" },
    { link: "Complete wedding services", path: "/carearpage" },
    { link: "Contact", path: "/contact" },

  ];
  const managementMembers = [
    { name: "Naushad Ali", role: "Managing Director" },
    { name: "Pankhuri Rai", role: "Lead Operations" },
  ];

  const secondRow = [
    {
      title: "Technical Team",
      members: [{ name: "Shameem Hussain", role: "Sr Manager Technical" }],
    },
    {
      title: "Operations Team",
      members: [{ name: "Pankaj Sanga", role: "Manager Operations" }],
    },
    {
      title: "Finance Team",
      members: [{ name: "Shahnawaz", role: "Finance Manager" }],
    },
  ];

  return (

    <nav className="w-full h-24 flex justify-between items-center lg:px-10 px-4 py-0 top-0 z-50 fixed " style={{ fontFamily: "-moz-initial", }}>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src="/p1.png"
          alt="Banner"
          style={{
            height: "100px",
            width: "100px",

            objectFit: "cover",
            opacity: 0,
            transform: "rotateY(90deg)",
            animation: "flipIn 0.8s ease-out 0.2s forwards",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        />
      </div>


      <style>
        {`
  @keyframes flipIn {
    to {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
`}
      </style>

      {/* Desktop Menu */}
      <ul className="lg:flex hidden justify-center text-lg items-center gap-2 flex-nowrap relative" style={{ fontFamily: "-moz-initial" }}>
        {navItem.map((item, index) => (
          <li
            key={index}
            className={`group relative ${item.link === "Our service" ? "hoverable" : ""
              }`}
          >
            <Link
              to={item.path}
              className="text-white capitalize font-medium cursor-pointer px-2 py-1 text-md hover:bg-yellow-500  hover:text-black rounded-full"
              spy={true}
              offset={-100}
              smooth={true}
              duration={500}
            >
              {item.link}
            </Link>

            {/* Hover Dropdown for "Our service" */}

            {item.link === "services" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[2000px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden rounded-xl p-6">
                <header className="bg-white shadow-md py-12 px-6 text-center">
                  <h1
                    className="text-4xl font-bold text-blue-900"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    Electrical Systems | Civil Engineering | Manpower Supply
                  </h1>
                  <p className="mt-2 text-xl text-gray-600">
                    Delivering Excellence, Every Step of the Way
                  </p>
                </header>

                <section className="py-10 bg-white">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                      640: { slidesPerView: 1.5 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 }, // 3 cards visible at once
                    }}
                    loop={true}
                    className="px-6"
                  >
                    {[
                      {
                        title: "Electrical System",
                        desc: "We provide comprehensive electrical services across commercial, industrial, and residential sectors. Our solutions adhere to the highest safety standards and industry best practices, covering:",
                        items: [
                          "Electrical Design & Consultancy",
                          "Installation & Commissioning",
                          "Maintenance & Upgrades",
                          "Energy Efficiency Solutions",
                        ],
                      },
                      {
                        title: "Manpower Supply",
                        desc: "With a deep talent pool and strategic workforce planning, we supply skilled professionals to meet your project demands. Our manpower solutions include:",
                        items: [
                          "Skilled & Semi-Skilled Labor",
                          "Project Management Teams",
                          "Technical Staff & Engineers",
                          "Temporary & Permanent Staffing",
                        ],
                      },
                      {
                        title: "Civil Engineering",
                        desc: "Our civil engineering services are built on sustainable practices and cutting-edge technologies, managing projects that balance functionality with environmental responsibility. We specialize in:.",
                        items: [
                          "Large-scale Infrastructure Projects",
                          "Commercial & Industrial Construction",
                          "Renovation & Retrofitting",
                          "Green Building Solutions",
                        ],
                      },
                      {
                        title: "Holistic Project Management",
                        desc: "At MPS, we combine strategic planning with advanced technologies to deliver projects with unmatched efficiency. Our project management approach ensures:.",
                        items: [
                          "On-Time Completion",
                          "Budget Adherence",
                          "Quality Excellence",
                          "Maximum Client Satisfaction",
                        ],
                      },
                    ].map((card, index) => (
                      <SwiperSlide key={index}>
                        <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 w-full">
                          <h2
                            className="text-2xl font-semibold text-blue-800 mb-2"
                            style={{ fontFamily: "-moz-initial" }}
                          >
                            {card.title}
                          </h2>
                          <p className="text-sm">{card.desc}</p>
                          <ul className="list-disc list-inside mt-2 text-sm">
                            {card.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
              </div>
            )}

            {item.link === "Gallery" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[700px] h-[400px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-auto rounded-xl p-6">
                <div className="text-center">
                  <h2 className="relative inline-block text-xl font-semibold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-red-500">
                    Gallery
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-6 text-sm leading-6 text-gray-700">
                  <p>
                    <div>
                      <motion.img
                        src={gallery1}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "260px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </p>
                  <p>
                    <div>
                      <motion.img
                        src={gallery2}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </p>
                  <p>
                    <div>
                      <motion.img
                        src={gallery3}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </p>
                  <p>
                    <div>
                      <motion.img
                        src={gallery6}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </p>
                  <p>
                    <div>
                      <motion.img
                        src={gallery5}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </p>
                  <p>
                    <div>
                      <motion.img
                        src={gallery4}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </p>
                </div>
              </div>
            )}
            {item.link === "Team" && (
              <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[560px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-auto rounded-xl ">
                <div className="text-center">
                  <h2 className="relative mt-4 inline-block text-xl font-semibold mb-6 bg-gradient-to-r from-violet-400 to-sky-900 text-transparent bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-red-500">
                    Our Management Team
                  </h2>
                  <div className="min-h-48n bg-gray-100 flex flex-col items-center justify-center p-6 space-y-10 overflow-hidden">
                    {/* Our Management Team - internal 2 column */}

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300 mb-4">
                        Our Management Team
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {managementMembers.map((member, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-lg bg-gray-50 hover:bg-blue-100 transition-all duration-300 group-hover:text-blue-700"
                          >
                            <p className="font-medium text-gray-700 group-hover:text-blue-800 transition duration-300">
                              {member.name}
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-700">
                              {member.role}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3 Column Teams */}
                    <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                      {secondRow.map((section, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                        >
                          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition duration-300 mb-4">
                            {section.title}
                          </h2>
                          <ul className="space-y-2">
                            {section.members.map((member, idx) => (
                              <li
                                key={idx}
                                className="p-3 rounded-lg bg-gray-50 hover:bg-green-100 transition-all duration-300 group-hover:text-green-700"
                              >
                                <p className="font-medium text-gray-700 group-hover:text-green-800 transition duration-300">
                                  {member.name}
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-700">
                                  {member.role}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item.link === "Successful projects" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[700px] h-[400px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-auto rounded-xl p-6">
                <div className="text-center">
                  <h2 className="relative inline-block text-xl font-semibold mb-6 bg-gradient-to-r from-green-800 to-red-700 text-transparent bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-red-500">
                    Successful project
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-6 text-sm leading-6 text-gray-700">
                  <p>
                    Maverick Power Solutions Private Limited has successfully
                    completed several prestigious pan- India projects related to
                    General Construction Service of Underground Lines. Mentioned
                    below are few completed and on-going Milestone Projects of
                    Maverick Power Solutions Private Limited (2018-2021):
                  </p>
                  <p className="text-purple">
                    <h2>Value Of Project - 12.90 crores</h2>
                    <b>Value Of Project - 22.10 crores </b>
                    <h2>Value Of Project - 20.02 crores</h2>
                    <b>Value Of Project - 25.8 crores</b>
                    <br></br>
                    <b>Value Of Project - 26 crores</b>
                    <h2>Value Of Project - 7.72 crores</h2>
                    <h2>Value Of Project - 1.58 crores</h2>
                    <h2>Value Of Project - 3.26 crores</h2>
                    <h2>Value Of Project - 3.7 crores</h2>
                  </p>
                </div>
              </div>
            )}
            {item.link === "Client" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[700px] h-[400px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-auto rounded-xl p-6">
                <div className="text-center">
                  <h2
                    className="relative inline-block text-xl font-semibold mb-6 bg-gradient-to-r from-green-800 to-red-700 text-transparent bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-red-500"
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    <p style={{ fontFamily: "-moz-initial" }}> Our Partners</p>
                  </h2>
                </div>
                <div
                  className="grid grid-cols-3 gap-6 text-sm leading-6 text-gray-700"
                  style={{ fontFamily: "-moz-initial" }}
                >
                  <div
                    className={`overflow-hidden rounded-xl animate-fade`}
                    style={{ fontFamily: "-moz-initial" }}
                  >
                    <img
                      src={client2}
                      alt="Electrical Work"
                      className="w-[120px] h-[100px] m-2 rounded-[10px] animate-glitch hover:scale-110 hover:rotate-2 hover:shadow-xl transition-transform duration-300"
                    />
                  </div>
                  <img
                    src={client3}
                    alt="Electrical Work"
                    className="w-[120px] h-[100px] m-2 rounded-[10px] animate-glitch hover:scale-110 hover:rotate-2 hover:shadow-xl transition-transform duration-300"
                  />
                  <img
                    src={client4}
                    alt="Electrical Work"
                    className="w-[120px] h-[100px] m-2 rounded-[10px] animate-glitch hover:scale-110 hover:rotate-2 hover:shadow-xl transition-transform duration-300"
                  />
                  <img
                    src={client5}
                    alt="Electrical Work"
                    className="w-[120px] h-[100px] m-2 rounded-[10px] animate-glitch hover:scale-110 hover:rotate-2 hover:shadow-xl transition-transform duration-300"
                  />
                  <img
                    src={client6}
                    alt="Electrical Work"
                    className="w-[120px] h-[100px] m-2 rounded-[10px] animate-glitch hover:scale-110 hover:rotate-2 hover:shadow-xl transition-transform duration-300"
                  />
                  <img
                    src={client7}
                    alt="Electrical Work"
                    className="w-[120px] h-[100px] m-2 rounded-[10px] animate-glitch hover:scale-110 hover:rotate-2 hover:shadow-xl transition-transform duration-300"
                  />
                </div>
              </div>
            )}
            {/* {item.link === "About Us" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[700px] h-[400px] bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-auto rounded-xl p-6">
                <h2
                  style={{ fontFamily: "-moz-initial" }}
                  className="relative inline-block text-xl font-semibold text-center mb-6 bg-gradient-to-r from-yellow-400 to-blue-500 text-transparent bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-gradient-to-r after:from-yellow-400 after:to-red-500"
                >
                  About The Companyss
                </h2>
                <div
                  className="grid grid-cols-3 gap-6 text-sm leading-6 text-gray-700"
                  style={{ fontFamily: "-moz-initial" }}
                >
                  <p>
                    Established in 2012, Maverick Power Solutions (MPS) Pvt.
                    Ltd. brings over twelve years of expertise in consultancy
                    and service-oriented projects, specializing in Electrical
                    and
                    <div>
                      <motion.img
                        src={el2}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                    <h4>
                      <b style={{ fontFamily: "-moz-initial" }}>
                        Electrical System Expertise
                      </b>
                    </h4>
                  </p>
                  <p style={{ fontFamily: "-moz-initial" }}>
                    We provide comprehensive electrical services across
                    commercial, industrial, and residential sectors. Our
                    solutions adhere to the highest safety standards and
                    industry best practices, covering:
                    <div>
                      <motion.img
                        src={el3}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                    <h4>
                      <b style={{ fontFamily: "-moz-initial" }}>
                        Civil Engineering Excellence
                      </b>
                    </h4>
                  </p>
                  <p style={{ fontFamily: "-moz-initial" }}>
                    We deliver innovation-driven and quality-focused solutions.
                    Client satisfaction and timely execution are our top
                    priorities. We move technical excellence and trusted
                    performance.
                    <div>
                      <motion.img
                        src={el4}
                        alt="Electrical Work"
                        style={{
                          width: "200px",
                          height: "110px",
                          borderRadius: "10px",
                        }}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                          width: "0px",
                          height: "0px",
                          rotate: -10,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          width: "180px",
                          margin: "10px",
                          height: "100px",
                          rotate: 0,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 2,
                          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          bounce: 0.3,
                          duration: 2,
                          delay: 0.2,
                        }}
                      />
                    </div>
                    <h4 style={{ fontFamily: "-moz-initial" }}>
                      <b>Technical Consultancy</b>
                    </h4>
                  </p>
                </div>
              </div>
            )} */}
          </li>
        ))}
      </ul>

      {/* <button className="bg-yellow-500 hover:bg-black text-black hover:text-white px-6 py-2 rounded-full font-semibold text-sm transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden">
                Reach us
            </button> */}
      <div className="flex space-x-4">
        <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-[#732255] transition duration-300">
          Login
        </button>
        <button className="border border-white text-white px-6 py-2 rounded-lg hover:bg-[#732255] transition duration-300">
          Signup
        </button>
      </div>


      {/* Mobile Menu Toggle */}
      <div
        className="flex lg:hidden items-center mt-2"
        onClick={toggleMenu}
        style={{ fontFamily: "-moz-initial" }}
      >
        {isMenuOpen ? (
          <FaXmark className="text-yellow-500 text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-yellow-500 p-4 absolute top-[96px] left-0 z-40`}
        onClick={closeMenu}
        style={{ fontFamily: "-moz-initial" }}
      >
        <ul
          className="flex flex-col justify-center items-center gap-3 w-full"
          style={{ fontFamily: "-moz-initial" }}
        >
          {navItem.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-black capitalize font-medium cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
