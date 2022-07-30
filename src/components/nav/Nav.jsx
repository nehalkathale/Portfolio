import React from "react";
import "./nav.css";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
// import { GrCertificate } from "react-icons/gr";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#technologies"
        onClick={() => setActiveNav("#technologies")}
        className={activeNav === "#technologies" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#education"
        onClick={() => setActiveNav("#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      {/* <a
        href="#certificates"
        onClick={() => setActiveNav("#certificates")}
        className={activeNav === "#certificates" ? "active" : ""}
      >
        <GrCertificate />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
