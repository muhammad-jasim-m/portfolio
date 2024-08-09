import React, { useContext, useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/p1.png";
import Ecommerce from "../../img/p3.png";
import HOC from "../../img/p5.png";
import MusicApp from "../../img/p2.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"; // Import Framer Motion

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showPopup, setShowPopup] = useState(false);
  const portfolioRef = useRef(null);


  const transition = {
    duration: 1,
    type: "spring",
  };



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 1500); // Hide after 3 seconds
        }
      },
      { threshold: 1 } // Trigger when 100% of the element is in view
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <div className="portfolio" id="portfolio" ref={portfolioRef}>
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent</span>
      <span>Projects</span>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="popup"
          initial={{ left: "3rem" }}
          whileInView={{ left: "10rem"  }}
         transition={transition}
        >
          Click me
        </motion.div>
      )}

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://kashanafzl.github.io/Shruh/User-Management.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
