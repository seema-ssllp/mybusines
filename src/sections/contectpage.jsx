import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Address",
    icon: <MapPin />,
    text: "Corporate Park A1 Tower 9th Floor Office No.903 Sector 142 Noida UP-201305",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    title: "Call Us",
    icon: <Phone />,
    text: (
    <>
      +91 9027365069<br />
      +91 8287869219  +91 1206085352
    </>
  ),
    bg: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    title: "Email",
    icon: <Mail />,
    text: "Maverickpowersolution3@gmail.com",
    bg: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
  {
    title: "Open Hours",
    icon: <Clock />,
    text: "Monday - Saturday \n  09:30 AM - 6:00 PM",
    bg: "bg-gradient-to-r from-pink-400 to-rose-500",
  },
];

const Contactpage = () => {
  // const [step, setStep] = useState(1); // State should be inside the component

  // const handleNext = () => {
  //   if (step < 3) setStep(step + 1);
  // };

  return (
    <div className="bg-white w-full mt-24">
      {/* Section 1 - Cards and Form */}
      <div className="lg:w-[85%] w-[95%] m-auto py-10 flex flex-col lg:flex-row gap-10">
        {/* Left side - Cards */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group [perspective:1000px]"
            >
              <div className="relative w-full h-52 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div
                  className={`absolute inset-0 rounded-xl p-6 shadow-lg text-white ${card.bg} backface-hidden`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white p-2 rounded-full">
                      {React.cloneElement(card.icon, {
                        className: "w-6 h-6 text-black",
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-sm whitespace-pre-line">{card.text}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-white text-gray-800 rounded-xl p-6 shadow-lg rotate-y-180 backface-hidden">
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm whitespace-pre-line">{card.text}</p>
                  <p className="mt-4 text-xs italic text-gray-500">Thanks for connecting!</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 w-full bg-gray-100 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="px-4 py-3 rounded-lg border border-gray-400"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-3 rounded-lg border border-gray-400"
            />
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="px-4 py-3 rounded-lg border border-gray-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="px-4 py-3 rounded-lg border border-gray-400"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <div className="mt-16 bg-gray-100 py-12 m-auto">
        <div className="lg:w-[85%] w-full m-auto grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[400px] rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.439987162213!2d81.0428574746834!3d26.794240362385215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f658b69c47%3A0xd59ee9d04a40a0a4!2sTiwariganj%2C%20Uttar%20Pradesh%20226028!5e0!3m2!1sen!2sin!4v1715677773333!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lucknow Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Multi-step form */}

    </div>
  );
};

export default Contactpage;
