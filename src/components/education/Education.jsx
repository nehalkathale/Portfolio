import React from "react";
import "./education.css";
import { IoSchoolOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import q2 from "../../assests/Q2.jpeg";
import puneUniversity from "../../assests/PuneUniversity.jpeg"
import zulily from "../../assests/Zulily.jpeg"
import uncc from "../../assests/Uncc.png"
import idmission from "../../assests/Idmission.jpeg"
const Education = () => {
  return (
    <section id="education">
      <h5 className="font-size-1">My Qualification</h5>
      <h1>Qualification</h1>
      <div className="container education__container">
        <div className="qualification__tabs">
          <div className="education__details">
            <IoSchoolOutline className="education__details__icon" />
            <h1>Education</h1>
          </div>
          <div className="education__details">
            <MdWorkOutline className="education__details__icon" />
            <h1>Work</h1>
          </div>
        </div>
        <div id="qualification">
        <div className="qualification__data">
            <div></div>
            <div className="qualification__container__line">
              <span className="qualification__rounder">
                <img src={zulily}></img>
              </span>
              <span className="qualification__line"></span>
            </div>
            
            <div className="qualification__details">
              <h4>Software Engineer I </h4>
              <h5>Zulily</h5>
              <small>January 2023 - December 2023</small>
              <div className="education__details__points">
              <ul>
                <li> * Played a key role in successfully migrating the company's platform to Shopex, resulting in improved efficiency.</li>
                <li> * Streamlined communication with Shopify by implementing pagination in GraphQL queries, leading to a 30% reduction in
query cost and enhanced data retrieval.</li>
                <li> * Redesigned React and Redux-based models, and introduced dynamic and responsive components for e-commerce, tailored to
diverse backend responses. Simultaneously addressed existing bugs in components to enhance the overall user experience.</li>
<li> * Refined CI/CD pipeline for deploying big cloud functions, utilized BigQuery for data storage, and automated the generation of
Weekly Business Reports (WBR) by extracting and analyzing data. Provided on-call support.</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div className="qualification__container__line">
              <span className="qualification__rounder">
              <img src={q2}></img>
              </span>
              <span className="qualification__line"></span>
            </div>
            <div className="qualification__details">
              <h4>Software Engineer(Intern)</h4>
              <h5 className="text-light">Q2</h5>
              <small className="text-light">May 2022 - Current</small>
              <div className="education__details__points">
              <ul>
                <li> * Improved performance and scalability by converting 25% of legacy components to new frontend library.</li>
                <li> * Increased web app accessibility by utilizing WAI-ARIA tags, and meeting Web Content Accessibility Guidelines.</li>
                <li> * Successfully managed project timeline and resources, delivering a 15% increase in team productivity and on-time delivery.</li>
            
              </ul>
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div className="qualification__details__college">
              <h4>Computer Science</h4>
              <h5 className="text-light">
                University of North Carolina, Charlotte
              </h5>
              <small className="text-light">
                August 2021 - December 2022(Expected)
              </small>
            </div>
            <div>
              <span className="qualification__rounder">
              <img src={uncc}></img>
              </span>
              <span className="qualification__line"></span>
            </div>
          </div>
          <div className="qualification__data">
            <div></div>
            <div className="qualification__container__line">
              <span className="qualification__rounder">
              <img src={idmission}></img>
              </span>
              <span className="qualification__line"></span>
            </div>
            <div className="qualification__details">
              <h4>Software Engineer</h4>
              <h5 className="text-light">Idmission Solutions Pvt Ltd</h5>
              <small className="text-light">July 2018 - July 2021</small>
              <div className="education__details__points">
              <ul>
                <li> * Optimized web-based applications utilizing Java, JavaScript, and JSP resulting in enhanced customer management services.</li>
                <li> * Implemented Firebase Reward Referrals & Firebase Cloud Messaging, increasing mobile notification success rate by 98%.</li>
                <li> * Streamlined project management process by utilizing Software Development Life Cycle, Agile methodologies, debugging and
finding root cause analysis, and effectively resolving technical issues.</li>
            
              </ul>
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div className="qualification__details__college">
              <h4>Computer Engineering</h4>
              <h5 className="text-light">Savitribai Phule Pune University</h5>

              <small className="text-light">June 2014 - May 2018</small>
            </div>
            <div className="qualification__container__line">
              <span className="qualification__rounder">
                <img src={puneUniversity}></img>
              </span>
              {/* <span className="qualification__line"></span> */}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
