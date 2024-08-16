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
          <p>Landing Page</p>
          <Link to="/" id="back-link">
            back
          </Link>
        </div>
        <div className="mid">
          <h1 id="mid-heading">
          Landing Pages
          </h1>
          <p id="first-dis">
          Landing pages are the digital storefronts of your marketing campaigns. A marketing agency can craft compelling landing pages tailored to specific audience segments, optimizing them for conversions.
          </p>
          <p id="second-dis">
          From design and development to A/B testing and performance analysis, agencies ensure that every element of the landing page works harmoniously to drive desired actions.
          </p>
          <p id="third-dis">
          By understanding user behavior and employing persuasive copywriting, they create landing pages that captivate visitors and turn them into leads or customers.  
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
                <p id="card-heading">Landing page design and development</p>
                <p id="card-dis">
                  Creating visually appealing, user-friendly landing pages
                  aligned with your brand identity and marketing goals.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Landing page copywriting</p>
                <p id="card-dis">
                  Crafting compelling and persuasive copy that resonates with
                  your target audience and drives conversions.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Landing page optimization</p>
                <p id="card-dis">
                  Analyzing landing page performance and making data-driven
                  improvements to increase conversions.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Landing page integration</p>
                <p id="card-dis">
                  Integrating landing pages with your existing website, CRM, and
                  marketing automation tools.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Landing Page Templates and Libraries</p>
                <p id="card-dis">
                Providing pre-designed templates and customizable elements to accelerate landing page creation.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Landing Page Performance Analysis</p>
                <p id="card-dis">
                Tracking key metrics and providing insights to optimize landing page effectiveness over time.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Landing Page Personalization</p>
                <p id="card-dis">
                Tailoring landing page content and design based on visitor behavior and demographics for increased engagement.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Lead Generation and Capture</p>
                <p id="card-dis">
                Designing effective lead capture forms and integrating with CRM systems for efficient lead management.
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
