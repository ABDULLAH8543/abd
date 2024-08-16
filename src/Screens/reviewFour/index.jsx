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
          <p>Ecommerce</p>
          <Link to="/" id="back-link">
            back
          </Link>
        </div>
        <div className="mid">
          <h1 id="mid-heading">Ecommerce</h1>
          <p id="first-dis">
            Ecommerce platforms are the digital storefronts for online
            businesses.Marketing agencies can help clients select, implement,
            and optimize ecommerce platforms to maximize sales.
          </p>
          <p id="second-dis">
            From designing visually appealing online stores to managing product
            information and optimizing the checkout process, agencies streamline
            the entire customer journey. By integrating payment gateways,
            shipping carriers, and inventory management systems, they ensure
            smooth operations and order fulfillment.
          </p>
          <p id="third-dis">
            Furthermore, agencies can leverage SEO and marketing strategies to
            increase website visibility and drive traffic, ultimately boosting
            sales and revenue
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
                <p id="card-heading">
                  Ecommerce Platform Selection and Implementation
                </p>
                <p id="card-dis">
                  Recommending and implementing suitable ecommerce platforms
                  based on business requirements and scale.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Ecommerce Store Design and Development</p>
                <p id="card-dis">
                  Creating visually appealing and user-friendly online stores
                  that drive sales.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Product Information Management (PIM)</p>
                <p id="card-dis">
                  Managing product data, attributes, and images for efficient
                  catalog management.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Shopping Cart Optimization</p>
                <p id="card-dis">
                  Enhancing the checkout process to minimize cart abandonment
                  and increase conversion rates.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Payment and Shipping Integration</p>
                <p id="card-dis">
                  Integrating secure payment gateways and shipping carriers for
                  smooth transactions.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Inventory Management</p>
                <p id="card-dis">
                  Implementing inventory tracking and management systems to
                  avoid stockouts and overstocking.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">earch Engine Optimization (SEO)</p>
                <p id="card-dis">
                  Optimizing product listings and website content for search
                  engines to improve visibility.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">Marketing and Promotion</p>
                <p id="card-dis">
                  Developing and executing ecommerce marketing campaigns to
                  drive traffic and sales.
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
