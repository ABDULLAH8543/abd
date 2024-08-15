import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import Contact from '../Contact/index'
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
        {/* <div className="mid">
          <h1 id="mid-heading">
            Rank on Top of Web Results With Our SEO Services
          </h1>
          <p id="first-dis">
            Search Engine Optimization is one of the most integral parts of a
            website that helps you rank higher on web pages and get more
            conversion rates. Our SEO services will improve your website ranking
            and get more potential customers.
          </p>
          <p id="second-dis">
            Users are more likely to trust sites that are on the first page of
            search engine results pages (SERPs). SPARK Agency offers the best
            SEO services in Pakistan. Our SEO experts will take your website to
            the top of results and boost your website traffic
          </p>
          <p id="third-dis">
            You should implement a good SEO strategy to build a strong web
            presence and top your competition. Let us take the burden of SEO off
            your shoulder and find new customers for your business.
          </p>
        </div> */}
        <div className="end">
          <h1>What We Provide</h1>
          <div className="end-cards">
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">SEO Targets Quality Traffic</p>
                <p id="card-dis">
                  Unlike traditional advertising where a general audience is
                  reached out to whether they are interested in your
                  product/services, SEO focuses on attracting an audience who
                  are actively interested for information related to your
                  products/services/industry.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">SEO Targets Quality Traffic</p>
                <p id="card-dis">
                  Unlike traditional advertising where a general audience is
                  reached out to whether they are interested in your
                  product/services, SEO focuses on attracting an audience who
                  are actively interested for information related to your
                  products/services/industry.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">SEO Targets Quality Traffic</p>
                <p id="card-dis">
                  Unlike traditional advertising where a general audience is
                  reached out to whether they are interested in your
                  product/services, SEO focuses on attracting an audience who
                  are actively interested for information related to your
                  products/services/industry.
                </p>
              </div>
            </div>
            <div className="card-outer">
              <p id="review-logos">
                <FaUserFriends />
              </p>
              <div className="card-inner">
                <p id="card-heading">SEO Targets Quality Traffic</p>
                <p id="card-dis">
                  Unlike traditional advertising where a general audience is
                  reached out to whether they are interested in your
                  product/services, SEO focuses on attracting an audience who
                  are actively interested for information related to your
                  products/services/industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Contact/>
    </div>
  );
};

export default index;
