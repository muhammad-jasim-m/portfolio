import React, { useContext, useState } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import d1 from '../../img/d3p.png';
import d3 from '../../img/d5p.png';
import d5 from '../../img/d2p.png';


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
        I bring ideas to life with clean, responsive, and visually engaging web designs.
          <br />
          Specializing in modern frontend development, <br />
           I create intuitive UI/UX experiences  and   optimized <br />
           high-performance web applications <br />  using technologies like React.js.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        <motion.div
          initial={{ left: "13rem" }}
          whileInView={{ left: "20rem"  }}
          transition={transition}
        >
          <Card
            emoji={d1}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
       
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
           
          />
        </motion.div>
      </div>

    </div>
  );
};

export default Services;
