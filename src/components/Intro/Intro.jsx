import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
import boy from "../../img/resumimg.avif";
import boy2 from "../../img/resumimg_processed.png"
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github1.png";
import LinkedIn from "../../img/linked1.png";
import Instagram from "../../img/whatsapp.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Muhammad Jasim Muhammad</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
        <a href="../../img/jasimcv.pdf" download > <button className="button i-button">Download CV</button></a>
        {/* </Link> */}
        {/* social icons */}


        <div className="i-icons">
          <a href="https://github.com/M-Jasim-M" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/mjasimm/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://wa.me/+923109671335" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>

        </div>
      </div>


      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        {
          darkMode ? <>
        <img src={boy2} alt="" />

          </>:<>
        <img src={boy} alt="" />
        </>
        }
        {/* <img src={boy} alt="" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Web" text2="Designer" />
        </motion.div>

        {/*  
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
