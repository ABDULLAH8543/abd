import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const Index = () => {

  return (
    <div>
      <section id='about-page'></section>
      <section id="about">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aperiam atque unde veritatis id temporibus praesentium omnis cum ipsam, harum, iure error, ipsa consequuntur dignissimos? Doloribus repellendus non tenetur pariatur?</p>
        <Link to='/review'>
        <div id="reviews">Clients Overview</div>
        </Link>
      </section>
    </div>
  );
};

export default Index;
