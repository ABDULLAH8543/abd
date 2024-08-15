import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <div id="service-fully-outer">
      <section id="services-page"></section>
      <section id="services">
        <h1>Services we offer</h1>
        <div id="dis">
          <p>
            SPARK Agency provides marketing solutions to a wide range of
            businesses. We use our expertise to deliver the most optimum digital
            services. With an array of innovative and viable marketing
            strategies, we cater to the specific needs of all businesses. We
            excel in providing many services, including Web Development and PPC
            advertising for businesses of all industry sectors. There is a
            marketing solution for every business at SPARK Agency, helping your
            business meet its requirements and thrive digitally.
          </p>
        </div>
        <div className="languagesgrid">
          <div id="service-one">
            Landing Page
            <p id="landing-page-dis">
              A landing page is a standalone webpage designed for a specific
              marketing campaign. It focuses on a single goal, like generating
              leads, sales, or downloads, with clear calls-to-action to guide
              visitors.
            </p>
            <Link to="/LandingPage" id="link">
              <button id="landing-page-read-more">Read more</button>
            </Link>
          </div>
          <div id="service-one">
            CMS
            <p id="landing-page-dis">
              It's a software application that helps you create, manage, and
              publish digital content without needing extensive coding
              knowledge. Think of it as a user-friendly tool for updating
              websites.
            </p>
            <Link to="/CMS" id="link">
              <button id="landing-page-read-more">Read more</button>
            </Link>
          </div>
          <div id="service-one">
            UI/UX design
            <p id="landing-page-dis">
              UI/UX design focuses on creating digital products that are both
              visually appealing (UI) and user-friendly (UX). It involves
              understanding user needs, creating intuitive interfaces, and
              ensuring a seamless user experience.
            </p>
            <Link to="/UI_UX_design" id="link">
              <button id="landing-page-read-more">Read more</button>
            </Link>
          </div>
          <div id="service-one">
            Ecommerce
            <p id="landing-page-dis">
              E-commerce is the buying and selling of goods or services over the
              internet. It involves online transactions and delivery. Businesses
              can reach customers globally without physical stores, offering
              convenience and a vast product range.
            </p>
            <Link to="/Ecommerce" id="link">
              <button id="landing-page-read-more">Read more</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
