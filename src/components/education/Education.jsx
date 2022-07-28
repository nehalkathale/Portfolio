import React from "react";
import "./education.css";
import { IoSchoolOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
const Education = () => {
  return (
    <section id="education">
      <h5>My Qualification</h5>
      <h2>Qualification</h2>
      <div className="container education__container">
        <div className="qualification__tabs">
          <div className="education__details">
            <IoSchoolOutline className="education__details__icon" />
            <h3>Education</h3>
          </div>
          <div className="education__details">
            <MdWorkOutline className="education__details__icon" />
            <h3>Work</h3>
          </div>
        </div>
        <div id="qualification">
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div className="qualification__details">
              <h4>Software Engineer(Intern)</h4>
              <h5 class="text-light">Q2</h5>
              <small class="text-light">May 2022 - Current</small>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div className="qualification__details">
              <h4>Teaching Assistant</h4>
              <h5 class="text-light">
                University of North Carolina, Charlotte
              </h5>
              <small class="text-light">January 2022 - May 2022</small>
            </div>
          </div>
          <div className="qualification__data">
            <div className="qualification__details__college">
              <h4>Computer Science</h4>
              <h5 class="text-light">
                University of North Carolina, Charlotte
              </h5>
              <small class="text-light">
                August 2021 - December 2022(Expected)
              </small>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div className="qualification__details">
              <h4>Software Engineer</h4>
              <h5 class="text-light">Idmission Solutions Pvt Ltd</h5>
              <small class="text-light">July 2018 - July 2021</small>
            </div>
          </div>
          <div className="qualification__data">
            <div className="qualification__details__college">
              <h4>Computer Engineering</h4>
              <h5 class="text-light">Savitribai Phule Pune University</h5>

              <small class="text-light">June 2014 - May 2018</small>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
