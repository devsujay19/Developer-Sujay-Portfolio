import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaDownload } from 'react-icons/fa';


const Feedbacks = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [imgPath, setImgPath] = useState(null);
  const body = document.querySelector("body");

  const handlePopup = (img) => {
    setShowPopup(true);
    setImgPath(img);
  }

  const closeModal = function (e) {
    setShowPopup(false)
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >

        {showPopup && (
          <div className="popupOverlay relative z-0">
            <div className="popupOverlay__card">
              <img src={closeLogo} onClick={() => closeModal()} className="popupOverlay__close" alt="" srcset="" />
              <img src={imgPath} alt="" srcset="" className="popupOverlay__img" />
            </div>
          </div>
        )}

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognitions</p>
          <h2 className={styles.sectionHeadText}>&nbsp;Resume's PDF</h2>
          <div className="resume">
            <button className='app__resume-download-btn' onClick={onButtonClick}><FaDownload className="downIcon" />Resume.pdf</button>
          </div>        
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "resume");
