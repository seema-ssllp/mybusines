
import { motion } from "framer-motion";
import { clients } from "../export";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";


// install Swiper modules


const slideUpVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

const Testimonials = () => {
  return (
    <div id="clients" className="w-full h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >





      </motion.div>
    </div>
  );
};

export default Testimonials;
