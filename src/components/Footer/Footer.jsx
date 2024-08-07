import React from "react";
import "./Footer.css";
import Wave from "../../img/footer2.png";
import Github from "../../img/gihubwhite.png";
import LinkedIn from "../../img/linkedwhite.png";
import Instagram from "../../img/whatsappwhite.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "105%" , marginLeft : '-3rem' }} />
      <div className="f-content">
        <span>kashanafzal2221@gmail.com</span>
        <div className="f-icons">
        <a href="https://github.com/kashanafzl" target="_blank" rel="noopener noreferrer">
            <img className="githubimg" src={Github} alt="" />
          </a>

          <a href="   https://www.linkedin.com/in/kashan-afzal/" target="_blank" rel="noopener noreferrer">
            <img className="githubimg" src={LinkedIn} alt="" />
          </a>
          <img className="githubimg" src={Instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
