import React from "react";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <h3>
    Hello, I'm Nehal Kathale, a results-driven Software Engineer. With a Master's in Computer Science, I bring a blend of academic excellence and hands-on experience.
    {'\n'}
    I have experties in Java, Spring, React, AWS.
    {'\n'}
    I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
    {'\n'}
    I'm dedicated to staying current with industry trends. I thrive on collaborative problem-solving and have a proven ability to lead impactful projects. Ready to leverage my skills, I am eager to contribute to innovative software engineering endeavors, driving success in dynamic and challenging environments.
</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
