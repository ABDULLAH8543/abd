import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import Contact from "../Contact/index";
import "./style.css";

const index = () => {
  return (
    <div>
      <div className="read-more-outer">
        <div className="top">
          <p>UI/UX Design</p>
          <Link to="/" id="back-link">
            back
          </Link>
        </div>
        <div className="mid">
          <h1 id="mid-heading">
          UI/UX Design
          </h1>
          <p id="first-dis">
          User interface (UI) and user experience (UX) design are crucial for creating websites that are both visually appealing and user-friendly. Marketing agencies specialize in crafting intuitive and engaging digital experiences.
          </p>
          <p id="second-dis">
          Through thorough user research and persona development, they gain deep insights into target audiences, enabling them to design websites that resonate with users. 
          </p>
          <p id="third-dis">
          By focusing on information architecture, wireframing, and prototyping, agencies ensure that websites are easy to navigate and use. Ultimately, their goal is to create seamless digital journeys that delight users and drive conversions. 
          </p>
        </div>
        <div className="end">
          <h1>What We Provide</h1>
          <div className="end-cards">
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">User Research and Persona Development</p>
                <p id="card-dis">
                  Conducting in-depth user research to understand target
                  audience needs and preferences.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Information Architecture</p>
                <p id="card-dis">
                  Structuring website content and navigation for optimal user
                  experience and findability.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Wireframing and Prototyping</p>
                <p id="card-dis">
                  Creating visual representations of website layouts and
                  interactions to facilitate design feedback.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">UI Design</p>
                <p id="card-dis">
                  Designing visually appealing and intuitive user interfaces
                  that align with brand identity.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">UX Design</p>
                <p id="card-dis">
                  Optimizing user flows and interactions to create seamless and
                  enjoyable user experiences.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Responsive Design</p>
                <p id="card-dis">
                  Ensuring website adaptability across different devices and
                  screen sizes.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Accessibility</p>
                <p id="card-dis">
                  Designing websites to be accessible to users with
                  disabilities, adhering to accessibility standards.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Design System Development</p>
                <p id="card-dis">
                  Creating reusable design components and style guides for
                  consistent and efficient design implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default index;
