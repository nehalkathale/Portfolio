import React from "react";
import Picture from "../../assests/About.jpg";
import { FaAward } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={Picture} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
            <p>
              I'm a graduate student at University of North Carolina, Charlotte.
              I tend to have a passion and focus for achieving results, and
              effectively executing processes by setting objectives, planning
              activities, and monitoring performance. I’m very likely to pursue
              continuous learning and improvement with a growth mindset.
              Software engineer that often place a high priority on completing
              tasks in line with customer expectations and likely to adopt a
              methodical and organized approach to ensure the quality of work
              output is of a high standard.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
