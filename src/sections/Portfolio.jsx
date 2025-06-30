import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import project1 from "../assets/a5.JPG";
import project2 from "../assets/a5.JPG";
import project3 from "../assets/a5.JPG";
import project4 from "../assets/a5.JPG";
import project5 from "../assets/a5.JPG";
import project6 from "../assets/a5.JPG";
import project7 from "../assets/a5.JPG";
import project8 from "../assets/a5.JPG";
import project9 from "../assets/a5.JPG";
import project10 from "../assets/a5.JPG";
import project15 from "../assets/a5.JPG";
import project14 from "../assets/a5.JPG";
import project12 from "../assets/a5.JPG";
import project16 from "../assets/a5.JPG";
import Purvanchal from "../assets/a5.JPG";
import maq from "../assets/a5.JPG";
// import Purvanchal2 from "../assets/rbhart.jpeg";

import { slideUpVariants, zoomInVariants } from "./animation";

const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project15,
  project12,
  project16,
  Purvanchal,
  // Purvanchal2,
  maq,
  project14,
  // project9,
  project10,
];

const Portfolio = () => {
  const [x, setX] = useState(0);
  const controls = useAnimation();

  // Auto-slide effect
  useEffect(() => {
    const slide = () => {
      setX((prevX) => {
        const newX = prevX - 1;
        if (Math.abs(newX) >= projectImages.length * 210) {
          return 0;
        }
        return newX;
      });
    };

    const interval = setInterval(slide, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ x });
  }, [x, controls]);

  return (
    <></>
  );
};

export default Portfolio;
