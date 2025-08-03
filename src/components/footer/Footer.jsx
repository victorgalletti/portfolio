import React from "react";
import { Gmail, LRounded, GitHub } from "../icons/Icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Galletti</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="home__social-icon" target="_blank">
            <LRounded />
          </a>

          <a href="#contact" className="home__social-icon">
            <Gmail />
          </a>

          <a
            href="https://github.com/victorgalletti"
            className="home__social-icon"
            target="_blank"
          >
            <GitHub />
          </a>
        </div>

        <div className="span footer__copy">
          &#169; Victor Galletti. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
