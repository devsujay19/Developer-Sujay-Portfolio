import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import webdev from "../assets/webdev.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [timeoutBool, setimeoutBool] = useState(false);

  setTimeout(() => {
    setimeoutBool(true);
  }, 500);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915EFF]">Sujay Mukherjee</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            An Experienced Full-Stack Engineer with 4+ years in Front-end and Back-end Development for Web-Applications. Also a Mobile Application Developer.<br className="sm:block hidden" />
            <p>
              I'm Proficient in ReactJS, NodeJS and React Native.
            </p>
          </p>
        </div>
      </div>
      <div
        style={{ top: `${isMobile ? "-1%" : "19%"}` }}
        className="threeDcomputer__parent"
      >
        <div
          style={{
            width: `${isMobile ? "98vw" : "80vw"}`,
            height: `${isMobile ? "80%" : "90%"}`,
          }}
          className="threeDcomputer"
        >
          {timeoutBool && <ComputersCanvas />}
        </div>
      </div>


      <div className="absolute xs:bottom-12 bottom-36 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
