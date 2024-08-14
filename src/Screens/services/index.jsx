import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCsswizardry } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import "./style.css";

const index = () => {
  return (
    <div id="service-fully-outer">
      <section id="services-page"></section>
      <section id="services">
        <h1>Services we offer</h1>
        <div id="dis">
          <p>SPARK Agency provides marketing solutions to a wide range of businesses. We use our expertise to deliver the most optimum digital services. With an array of innovative and viable marketing strategies, we cater to the specific needs of all businesses. We excel in providing many services, including Web Development and PPC advertising for businesses of all industry sectors. There is a marketing solution for every business at SPARK Agency, helping your business meet its requirements and thrive digitally.</p>
        </div>
        <div className="languagesgrid">
          <p id="react">
            <span>
              <FaReact />
            </span>{" "}
            react js
          </p>
          <p id="js">
            <span>
              <IoLogoJavascript />
            </span>{" "}
            java script
          </p>
          <p id="css">
            <span>
              <SiCsswizardry />
            </span>{" "}
            css
          </p>
          <p id="html">
            <span>
              <FaHtml5 />
            </span>{" "}
            html
          </p>
          <p id="native">
            <span>
              <TbBrandReactNative />
            </span>{" "}
            react native
          </p>
        </div>
      </section>
    </div>
  );
};

export default index;
