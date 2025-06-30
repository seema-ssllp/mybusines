import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/ji3.jpg";
import img2 from "../assets/ji1.jpg";
import img3 from "../assets/ji2.jpg";
import img4 from "../assets/ji4.jpg";
import img5 from "../assets/ji5.jpg"
// import img9 from "../assets/staff2.jpeg"
import img12 from "../assets/ji6.jpg";
import img10 from "../assets/ji7.jpg"
import img11 from "../assets/ji8.jpg"
import bgImage from "../assets/ji9.png";
import powerh1 from "../assets/ab2.jpg";
import poweh2 from "../assets/abc3.jpg";
// import power4 from "../assets/group2.jpeg";
import pwer1 from "../assets/nn.jpg";
import power8 from "../assets/abc.jpg";
import pwer2 from "../assets/abc.jpg";
// import pwer3 from "../assets/man1.jpg";
import pwer5 from "../assets/abc2.jpg";
import pwer4 from "../assets/abc2.jpg";// ✅ Add your permanent background image here

const galleryImages = [
  { id: 1, src: powerh1, title: "" },
  { id: 2, src: poweh2, title: "" },
  { id: 3, src: img5, title: "" },
  { id: 4, src: power8, title: "" },
  { id: 5, src: pwer1, title: " " },
  { id: 6, src: pwer2, title: "" },
  // { id: 7, src: pwer3, title: "" },
  { id: 8, src: pwer4, title: "" },
  { id: 9, src: pwer5, title: "" },
];
const images = [img1, img2, img3, img4, img5, img10, img11, img12];

const Gallerypage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <>
      <div
        className="relative h-[600px] w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }} // ✅ Background Image
      >
        {/* Sliding Foreground Image with Zoom */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Gallery Slide"
            initial={{ y: "100%", scale: 0.9, opacity: 0 }}
            animate={{ y: 0, scale: 1.05, opacity: 1 }}
            exit={{ y: "-100%", scale: 1, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </AnimatePresence>

        {/* 40% Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        {/* Text Animations */}
        {/* <motion.div
        key={"text1-" + current}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "30%", opacity: 1, translateX: "-40%" }}
        transition={{ duration: 2 }}
        className="absolute top-1/3 right-1/3 z-20 text-6xl font-bold text-white rounded-md"
      >
        Maverick Power Solutions
      </motion.div>

      <motion.div
        key={"text2-" + current}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "50%", opacity: 1, translateX: "-50%" }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute top-1/2 left-52 text-2xl text-bold  text-white rounded-md"
        style={{ fontFamily: "-moz-initial" }}
      >
        Power house structures often set the foundation for industrial or public
       <br></br>
        In modern development, a gallery construction project follows strict
       <br></br>
        It emphasizes optimal lighting, climate control, and adaptable display
       <br></br>
        Durable, eco-friendly materials are used to ensure both longevity and
  .<br></br>
        Security, accessibility, and aesthetic balance are key to a successful
        .<br></br>
      </motion.div> */}

        {/* Arrow Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/1 flex gap-4 z-20">
          <motion.button
            onClick={prevImage}
            whileTap={{ y: 10 }}
            className="bg-white/70 px-4 py-2 rounded-full text-xl hover:bg-orange-400"
          >
            ⬅️
          </motion.button>
          <motion.button
            onClick={nextImage}
            whileTap={{ y: 10 }}
            className="bg-white/70 px-4 py-2 rounded-full text-xl hover:bg-orange-400"
          >
            ➡️
          </motion.button>
        </div>
      </div>


      <div className="bg-gray-100 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Display Image */}
          <div className="mb-10">
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src={mainImage.src}
                alt={mainImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-lg">
                {mainImage.title}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                onClick={() => setMainImage(item)}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition duration-300 transform hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* gallery second */}
    </>
  );
};

export default Gallerypage;
