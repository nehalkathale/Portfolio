import React from "react";
import CTA from "./CTA";
import Social from "./Social";
import "./header.css";
import { BsArrowDownSquare } from "react-icons/bs";
import ProfilePicture from "../../assests/Profile.jpg";
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container ">
        <h5 className="font_size_3">Hello I'm</h5>
        <h1 className="font_size_8">Nehal Kathale</h1>
        <h2 className="font_size_3 text-light">Software Developer</h2>
        <CTA />
        <Social />
        <div className="profile-picture">
          <img src={ProfilePicture} alt="profilePic" />
        </div>
        <div className="scroll__down">
          <a href="#contact">
            <BsArrowDownSquare />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
