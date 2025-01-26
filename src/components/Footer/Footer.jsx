import React, { useState, useEffect } from 'react';
import "./Footer.css";
import Wave from "../../img/footer2.png";
import Github from "../../img/gihubwhite.png";
import LinkedIn from "../../img/linkedwhite.png";
import Instagram from "../../img/whatsappwhite.png";

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Adjust this value to control when the button appears
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "105%" , marginLeft : '-3rem' }} />
      <div className="f-content">
        <span>jasimdev200@gmail.com</span>
        <div className="f-icons">
        <a href="https://github.com/M-Jasim-M" target="_blank" rel="noopener noreferrer">
            <img className="githubimg" src={Github} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/mjasimm/" target="_blank" rel="noopener noreferrer">
            <img className="githubimg" src={LinkedIn} alt="" />
          </a>
          <a href="https://wa.me/+923109671335" target="_blank" rel="noopener noreferrer">
          <img className="githubimg" src={Instagram} alt="" />
          </a>
        </div>
      </div>
      isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        &#8679; {/* This is an arrow up symbol; you can use an icon or text */}
      </button>
    )
    </div>
  );
};

export default Footer;
