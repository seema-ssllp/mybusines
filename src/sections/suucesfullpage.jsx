import { useState, useRef } from "react";
import img1 from "../assets/des.jpg";
import bgImage from "../assets/des1.jpg";

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

  const skills = [
    "React.js", "Redux", "JavaScript", "Express.js", "MongoDB",
    "RESTful API", "Tailwind CSS", "HTML/CSS", "Bootstrap",
    "SQL", "Time Management", "Team Work"
  ];

  return (
    <>
      {/* Hero Section (Static) */}
      <div
        className="h-[70vh] bg-cover bg-center relative flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold">SG CODER</h1>
          <p className="text-lg sm:text-2xl mt-4">Your Trusted Development Partner</p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Projects Clients</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {[{ title: "SG CODER Gallery", key: "government" }, { title: "Private Clients", key: "private" }].map((card, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(card.key)}
                className="bg-gradient-to-tr from-rose-500 to-pink-400 text-white w-full sm:w-1/3 py-8 px-6 text-center rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
            ))}
          </div>

          {selectedProject && (
            <section
              ref={selectedProject === "government" ? section4Ref : section5Ref}
              className="mt-16 px-4 py-10 bg-gradient-to-br from-white via-pink-50 to-rose-100 rounded-3xl shadow-2xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-rose-600 mb-10">
                {selectedProject === "government" ? "Clients Review" : "Happy Clients  "}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(selectedProject === "government" ? usersData : privateProjectsData).map((item, index) => (
                  <div
                    key={index}
                    className="relative group h-[20rem] bg-cover bg-center rounded-xl shadow-lg overflow-hidden"
                    style={{ backgroundImage: `url(${img1})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 text-white text-lg font-semibold text-center px-2">
                      {item.partyName}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* About + Skills + Experience */}
      <div className="font-sans">
        <section className="bg-indigo-600 text-white py-20 px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Seema Gupta</h1>
          <p className="text-xl">Front-End Developer | MERN Stack Enthusiast</p>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Passionate about building intuitive, user-friendly applications with modern web technologies.
          </p>
          <a
            href="mailto:seemagupta8005@gmail.com"
            className="inline-block mt-6 bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-purple-100"
          >
            Contact Me
          </a>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
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
