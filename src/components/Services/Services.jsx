import React, { useContext, useState } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import d1 from '../../img/d3p.png';
import d3 from '../../img/d5p.png';
import d5 from '../../img/d2p.png';
import AnimatedPopup from '../Animatedpopup/Animaterd'; // Import the AnimatedPopup component

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // state to manage popup visibility and content
  const [popupContent, setPopupContent] = useState(null);

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  // function to handle card click
  const handleCardClick = (content) => {
    setPopupContent(content);
  };

  // function to close popup
  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={d1}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            onClick={() => handleCardClick({
              heading: "Design",
              detail: "Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd",
              image: d1
            })}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-8rem" }}
          transition={transition}
        >
          <Card
            emoji={d3}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            onClick={() => handleCardClick({
              heading: "Developer",
              detail: "Html, Css, JavaScript, React, Nodejs, Express",
              image: d3
            })}
          />
        </motion.div>
        <motion.div
          initial={{ top: "24rem", left: "30rem" }}
          whileInView={{ left: "13rem" }}
          transition={transition}
        >
          <Card
            emoji={d5}
            heading={"UI/UX"}
            detail={"I implement UI/UX designs, creating intuitive and user-friendly interfaces."}
            onClick={() => handleCardClick({
              heading: "UI/UX",
              detail: "I implement UI/UX designs, creating intuitive and user-friendly interfaces.",
              image: d5
            })}
          />
        </motion.div>
      </div>

      {popupContent && <AnimatedPopup content={popupContent} onClose={closePopup} />}
    </div>
  );
};

export default Services;
