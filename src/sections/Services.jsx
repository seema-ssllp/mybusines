import React from "react";
import {
  FaSmile,
  FaTasks,
  FaClock,
  FaUsers,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaMobileAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaProjectDiagram,
  FaCloud,
  FaDatabase,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import weddingBg from "../assets/sof.jpg";
import bg from "../assets/co1.jpg";

const Services = () => {
  const stats = [
    { icon: <FaSmile />, title: "Happy Clients", value: "20+" },
    { icon: <FaTasks />, title: "Projects", value: "30+" },
    { icon: <FaClock />, title: "Hours Of Support", value: "50+" },
    { icon: <FaUsers />, title: "Hard Workers", value: "50+" },
  ];

  const steps = [
    {
      icon: <FaClipboardList />,
      title: "Planning and Research",
      desc: "Start with research and planning to define goals and audience.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Design",
      desc: "Create wireframes and prototypes based on user needs and project goals.",
    },
    {
      icon: <FaCode />,
      title: "Development",
      desc: "Translate designs into code, ensuring functionality and responsiveness.",
    },
    {
      icon: <FaRocket />,
      title: "Testing and Deployment",
      desc: "Conduct thorough testing and deploy the site for public access.",
    },
  ];

  const services = [
    { icon: <FaMobileAlt />, title: "App Development", desc: "Mobile apps for Android & iOS." },
    { icon: <FaLaptopCode />, title: "Web Applications", desc: "Modern React & Node.js web apps." },
    { icon: <FaShoppingCart />, title: "E-Commerce", desc: "Online stores with payment & cart." },
    { icon: <FaProjectDiagram />, title: "Project Handling", desc: "Custom solutions from scratch." },
    { icon: <FaCloud />, title: "Cloud Hosting", desc: "Fast and secure cloud deployment." },
    { icon: <FaDatabase />, title: "Database Setup", desc: "MongoDB, MySQL, Firebase & more." },
    { icon: <FaCogs />, title: "Custom Software", desc: "Tailored software for businesses." },
    { icon: <FaChartLine />, title: "SEO & Performance", desc: "Boost site speed & visibility." },
  ];

  return (
    <>
      {/* Section 1: Our Client Stats */}
      <div
        className="min-h-screen w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${weddingBg})` }}
      >
        <div className="bg-black bg-opacity-60 py-16 px-6 flex flex-col justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-10 drop-shadow-md">
            OUR CLIENT
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white max-w-6xl mx-auto">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl flex flex-col items-center shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl text-pink-400 mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Working Process */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-white py-20 text-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Working Process For <span className="text-pink-500">Technology</span>
          </h2>
          <p className="text-lg text-white/70 mb-14">
            Our development process ensures efficiency, clarity, and quality at every stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md hover:scale-105 transition text-center"
              >
                <div className="text-4xl text-pink-400 mb-4 mx-auto">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: My Services */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-7xl mx-auto w-full text-white">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              My Services
            </h1>
            <p className="text-base md:text-lg text-white/80">
              I provide all kinds of modern web solutions to turn your ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition"
              >
                <div className="text-4xl text-pink-400 mb-4 mx-auto">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
