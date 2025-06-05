import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Sriram1918"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://hashnode.com/@Sriram2005"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHashnode />
      </a>

      <a
        href="https://dev.to/sriram_s_3a987a1bb61c5f53"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaDev />
      </a>

      <a
        href="https://www.linkedin.com/in/sriram-sivaraman-165777310/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.facebook.com/share/16jTmfsfgK/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://x.com/SriramS30257879"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
