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
          <p>CMS ( Content Management System )</p>
          <Link to="/" id="back-link">
            back
          </Link>
        </div>
        <div className="mid">
          <h1 id="mid-heading">CMS</h1>
          <p id="first-dis">
            A content management system (CMS) is the backbone of a website.
            Marketing agencies excel at selecting, implementing, and customizing
            CMS platforms to suit clients' specific needs.
          </p>
          <p id="second-dis">
            They streamline content creation and management processes, ensuring
            that websites are updated regularly with fresh and engaging content.
            By optimizing CMS performance and security, agencies guarantee a
            smooth user experience and protect valuable data.
          </p>
          <p id="third-dis">
            Additionally, they can provide essential training and support to
            empower clients to effectively manage their website content.
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
                <p id="card-heading">CMS Selection and Implementation</p>
                <p id="card-dis">
                  Recommending and implementing suitable CMS platforms based on
                  client requirements and budget.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">CMS Customization</p>
                <p id="card-dis">
                  Developing custom features and integrations to meet specific
                  business needs and enhance user experience.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">CMS Training and Support</p>
                <p id="card-dis">
                  Providing comprehensive training to content creators and
                  administrators, as well as ongoing support.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Content Management Strategy</p>
                <p id="card-dis">
                  Developing content management strategies and workflows to
                  ensure efficient content creation and publishing.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">CMS Security and Optimization</p>
                <p id="card-dis">
                  Implementing robust security measures and optimizing CMS
                  performance for optimal website speed and reliability.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">CMS Migration</p>
                <p id="card-dis">
                  Assisting with smooth migration from existing CMS platforms to
                  new systems, minimizing disruptions.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">CMS Maintenance and Updates</p>
                <p id="card-dis">
                  Providing regular updates and maintenance to ensure CMS
                  security and compatibility.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">CMS Analytics and Reporting</p>
                <p id="card-dis">
                  Integrating analytics tools to track website performance and
                  provide actionable insights.
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
