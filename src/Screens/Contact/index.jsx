import React from "react";
import { MdEmail } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./style.css";

const index = () => {
  return (
    <div>
      <section id="contact">
        <div className="fully-outer-footer">
          <div className="footer-one">
            <p>GET IN TOUCH contact us</p>
          </div>
          <div className="footer-two">
            <div className="phone-number">
              <p id="phone-icon">
                <FaHeadphones />
              </p>
              <p id="no">03140162975</p>
            </div>
            <div id="email">
              <p id="email-icon">
                <MdEmail />
              </p>
              <p id="em">abdullahahmedjutt45679@gmail.com</p>
            </div>
            <div id="insta">
              <a href="https://www.instagram.com/spark_digital__/?igsh=Y3c0YWI3OG1oZDNs">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
