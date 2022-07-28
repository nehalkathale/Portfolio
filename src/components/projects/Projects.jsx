import React from "react";
import "./projects.css";

const projectsList = [
  {
    id: 1,
    Title: "Art Trading",
    gitHub: "https://github.com/nehalkathale/Art-Trading",
    description:
      "Online Art Trading Application using Node.js, Express.js and MongoDB.",
  },
  {
    id: 2,
    Title: "Object Detection ",
    gitHub: "https://github.com/nehalkathale/objectdetection",
    description:
      "Image detection app using React.js and Tensorflow.js(COCO SSD)",
  },
  {
    id: 3,
    Title: "FireChat",
    gitHub: "https://github.com/nehalkathale/firechat",
    description: "Fullstack chat demo with React and Firebase.",
  },
  {
    id: 4,
    Title: "Weather App",
    gitHub: "https://github.com/nehalkathale/Weather-App",
    description:
      "A weather application that gives current weather after entering the user’s location.",
  },
  {
    id: 5,
    Title: "OpenAQ-AWS",
    gitHub: "https://github.com/Shivashish1010/OpenAQ-AWS",
    description:
      "Descriptive analysis of air pollution index of different countries using AWS: S3, Quicksight, Sagemaker.",
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        {projectsList.map(({ id, Title, gitHub, description }) => {
          return (
            <article key={id} className="project__item">
              <h3 className="project__title">{Title}</h3>

              <details className="project__description">{description}</details>

              <div className="project__item__link">
                <a
                  href={gitHub}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
