import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Social = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nehal-kathale/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/nehalkathale"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default Social;
