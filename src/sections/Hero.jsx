import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import con1 from "../assets/a5.JPG";
import con6 from "../assets/a5.JPG";
import gallery from "../assets/a4.jpg";
import gallery1 from "../assets/a5.JPG";
import gallery2 from "../assets/a5.JPG";
import { slideUpVariants, zoomInVariants } from "./animation";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-fit pt-[60px] lg:pt-0">
      {/* Background Carousel */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={5000}
          transitionTime={1500}
        >
          <div>
            <img
              src={gallery1}
              alt="Slide 4"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div>
            <img
              src={con1}
              alt="Slide 1"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div>
            <img
              src={con6}
              alt="Slide 2"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div>
            <img
              src={gallery}
              alt="Slide 3"
              className="h-[700px] w-full object-cover"
            />
          </div>
          <div>
            <img
              src={gallery2}
              alt="Slide 5"
              className="h-[700px] w-full object-cover"
            />
          </div>
        </Carousel>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full lg:h-[700px] m-auto lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-white text-2xl mt-20 font-bold"
            style={{ fontFamily: "-moz-initial" }}
          >
            National Renowned & Delhi Most Trusted<br /> Photographer & Cinematographer
          </motion.h1>

          <motion.h1
            variants={slideUpVariants}
            className="text-white uppercase font-bold"
          >
            <div
              style={{
                textShadow: "4px 4px 7px #000000",
                fontFamily: "-moz-initial",
              }}
            >
              <p className="text-3xl" style={{ fontSize: "42px", whiteSpace: "nowrap" }}>
                Jitin Studio<br /><p className="mt-4">Royal Wedding</p>
              </p>
            </div>
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex justify-normal items-center gap-5"
          >
            <Link to="/about">
              <motion.button
                variants={zoomInVariants}
                className="border border-white hover:bg-[#732255] hover:text-white px-10 py-3 rounded-lg text-white font-bold transition duration-300 bg-transparent"
                style={{ fontFamily: "-moz-initial" }}
              >
                READ MORE
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                variants={zoomInVariants}
                className="border-white hover:bg-[#732255] hover:text-white  border-2 px-10 py-3 rounded-lg text-white font-bold"
                style={{ fontFamily: "-moz-initial" }}
              >
                REACH US
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Triangle Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path d="M1200 0L0 100L1200 100V0Z" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
