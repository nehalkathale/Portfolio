import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#education">Qualification</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nehal-kathale/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/nehalkathale">
          <AiFillGithub />
        </a>
        <a href="mailto:nehalkathale1405@gmail.com">
          <CgMail />
        </a>
        <a href="https://www.facebook.com/nehalk14">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/nehal_kathale14/">
          <FiInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
