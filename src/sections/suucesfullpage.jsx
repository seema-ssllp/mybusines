import { useState, useEffect, useRef } from "react";
import img1 from "../assets/aa.jpg";
import img2 from "../assets/aa.jpg";
import img3 from "../assets/st3.jpg";
import bgImage from "../assets/st.jpg";

const slides = [
  { id: 1, image: img1, title: "SG CODER ", subtitle: "quit" },
  { id: 2, image: img2, title: "SG CODER SG CODER", subtitle: "SG CODER  makup" },
  { id: 3, image: img3, title: "SG CODER  day", subtitle: "  makup wedding girl" },
];

const usersData = [
  { partyName: "SG CODER SG CODER SG CODER SG CODER" },
  { partyName: "SG CODER SG CODER SG CODER SG CODER" },
  { partyName: "SG CODER SG CODER SG CODER SG CODER" },
];

const privateProjectsData = [
  { partyName: "SG CODER SG CODER" },
  { partyName: "SG CODER SG CODER" },
  { partyName: "SG CODER SG CODER" },
  { partyName: "SG CODER SG CODER" },
  { partyName: "Bright Future Energy" },
  { partyName: "SG CODER SG CODER" },
];

const Suucesfullpage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [current, setCurrent] = useState(0);

  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const handleCardClick = (key) => {
    setSelectedProject(key);
    setTimeout(() => {
      const ref = key === "government" ? section4Ref : section5Ref;
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    "React.js", "Redux", "JavaScript", "Express.js", "MongoDB",
    "RESTful API", "Tailwind CSS", "HTML/CSS", "Bootstrap",
    "SQL", "Time Management", "Team Work"
  ];

  return (
    <>
      {/* Hero Section (Slider) */}
      <div className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">{slides[current].title}</h1>
          <p className="text-lg md:text-2xl animate-fadeInUp delay-200">{slides[current].subtitle}</p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">SG CODER SG CODER</h1>
          <div
            className="relative h-96 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="p-10 relative z-10 flex justify-between items-center gap-6">
              {[{ title: "SG CODER Gallery", key: "government" }, { title: "new", key: "private" }].map((card, index) => (
                <div
                  key={index}
                  className="group perspective w-[40%] h-56 mt-20 cursor-pointer"
                  onClick={() => handleCardClick(card.key)}
                >
                  <div className="relative w-full h-40 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="absolute w-full h-full bg-gradient-to-r from-rose-500 to-pink-400 backdrop-blur-md border border-white/40 rounded-xl shadow-2xl text-white px-4 py-5 transform backface-hidden">
                      <p className="text-3xl mt-10 font-bold drop-shadow-lg">{card.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Project Gallery */}
          {selectedProject && (
            <section
              ref={selectedProject === "government" ? section4Ref : section5Ref}
              id={selectedProject === "government" ? "section-4" : "section-5"}
              className="mt-10 px-6 py-10 bg-gradient-to-br from-white via-pink-50 to-rose-100 rounded-3xl shadow-2xl max-w-7xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">
                {selectedProject === "government" ? "SG CODER Gallery" : "new"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-2 sm:px-4">
                {(selectedProject === "government" ? usersData : privateProjectsData).map((item, index) => (
                  <div
                    key={index}
                    className="relative group w-full h-[22rem] md:h-[26rem] overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition duration-700 ease-in-out"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${img1})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg md:text-xl font-bold text-center px-2">
                      {item.partyName.split(" ").slice(0, 3).join(" ")}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Static Portfolio Content */}
      <div className="font-sans">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Seema Gupta</h1>
            <p className="text-xl">Front-End Developer | MERN Stack Enthusiast</p>
            <p className="mt-4 text-lg">
              Passionate about building intuitive, user-friendly applications with modern web technologies.
            </p>
            <div className="mt-6">
              <a href="mailto:seemagupta8005@gmail.com" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-7">
              I am an experienced front-end engineer known for designing and implementing innovative software
              solutions. Specialized in crafting visually appealing, responsive interfaces to enhance user
              experiences. I'm passionate about continuous learning and committed to building impactful software
              using the MERN Stack.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">E-Commerce Website</h3>
                <p>
                  Built using React.js, Tailwind CSS, Bootstrap. Backend with Express.js, supporting full product browsing and cart functionality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">SeekQuiz Project</h3>
                <p>
                  Game-based quiz application built using MERN Stack (MongoDB, Express, React, Node.js) with MySQL integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Jankiweb Infotech Pvt Ltd</h3>
                <p>Junior Engineer (MERN Developer) | Mar 2023 - Feb 2024</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Zn Infotech Pvt Ltd</h3>
                <p>Software Developer Intern | Aug 2023 - Jan 2024</p>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold">B.Tech CSE (3rd Year Appearing)</h3>
                <p>Dr. A. P. J. Abdul Kalam Technical University, Lucknow</p>
                <h3 className="text-xl font-semibold">Diploma in CSE (2023)</h3>
                <p>Govt Polytechnic, Mohammadi-Kheri</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Suucesfullpage;