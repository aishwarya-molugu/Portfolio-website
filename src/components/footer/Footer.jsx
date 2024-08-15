import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>

        <ul className="footer__list">
          <li href="#about" className="footer__link">
            About
          </li>

          <li href="#services" className="footer__link">
            Services
          </li>

          <li href="#testimonials" className="footer__link">
            Testimonials
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            //target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            //target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/"
            className="footer__social-link"
            //target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; John Smith. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
