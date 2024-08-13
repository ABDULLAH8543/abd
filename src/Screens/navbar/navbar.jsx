import React, { useState } from "react";
import { IoOptionsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaBoltLightning } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState("none");

  const handleClick = () => {
    if (open === "none") {
      setOpen("flex");
    } else {
      setOpen("none");
    }
  };

  return (
    <div>
      <div className="fully-outer">
      <div className="outer">
        <h3 id="main-heading">S<span>p</span>ark<span id="logo"><FaBoltLightning /></span></h3>
        <div className="option" onClick={handleClick}>
          <IoOptionsOutline />
        </div>
        <ul style={{ display: open }}>
          <a href="#services-page">
            <li>Services</li>
          </a>
          <a href="#projects">
            <Link to='/review'>
            <li>Reviews</li>
            </Link>
          </a>
          <a href="#about-page">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
