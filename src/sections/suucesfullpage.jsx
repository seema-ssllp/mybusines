import { useState, useEffect, useRef } from "react";
import img1 from "../assets/ji7.jpg";
import img2 from "../assets/ji7.jpg";
import img3 from "../assets/ji7.jpg";
import bgImage from "../assets/ji7.jpg";

const slides = [
  { id: 1, image: img1, title: "Powering Rural Development", subtitle: "Transforming villages with reliable electricity access" },
  { id: 2, image: img2, title: "Urban Energy Solutions", subtitle: "Modern grids for modern cities" },
  { id: 3, image: img3, title: "Smart Infrastructure Projects", subtitle: "Empowering growth with technology-driven energy systems" },
];

const usersData = [
  { partyName: "URVASI INFRATECH PVT LTD(DLF)" },
  { partyName: "URVASI INFRATECH PVT LTD(DLF)" },
  { partyName: "URVASI INFRATECH PVT LTD(DLF)" },
];

const privateProjectsData = [
  { partyName: "GreenTech Pvt Ltd" },
  { partyName: "City Grid Electricals" },
  { partyName: "Tech Power Solutions" },
  { partyName: "Energize Solutions" },
  { partyName: "Bright Future Energy" },
  { partyName: "Volt Power Systems" },
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

  return (
    <>
      {/* Hero Section */}
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

      {/* Project Section */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">Successful Projects</h1>

          {/* Project Selector Cards */}
          <div
            className="relative h-96 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="p-10 relative z-10 flex justify-between items-center gap-6">
              {[{ title: "Government Project", key: "government" }, { title: "Private Project", key: "private" }].map((card, index) => (
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

          {/* Project Gallery */}
          {selectedProject && (
            <section
              ref={selectedProject === "government" ? section4Ref : section5Ref}
              id={selectedProject === "government" ? "section-4" : "section-5"}
              className="mt-10 px-6 py-10 bg-gradient-to-br from-white via-pink-50 to-rose-100 rounded-3xl shadow-2xl max-w-7xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-rose-500 mb-10">
                {selectedProject === "government" ? "Govt Projects" : "Private Projects"}
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
    </>
  );
};

export default Suucesfullpage;
