import React from 'react'
import { Link } from 'react-router-dom';
import "./ServicesPageScreen.css";

const ServicesPageScreen = () => {
  return (
    <div className="portfolio-services-view">
      <div className="services-content-box">
        <h1 className="services-title">My Services</h1>

        <p className="services-text">
          Welcome to my workspace. I specialize in building custom, high-end digital experiences, robust backend systems, and clean user interfaces tailored to your specific goals.
        </p>

        <h2 className="services-subtitle">Web Design & Frontend Development</h2>
        <p className="services-text">
          I design beautiful, responsive websites using modern technologies like React, JavaScript, and CSS, ensuring your project looks stunning on both computers and mobile screens.
        </p>

        <h2 className="services-subtitle">Custom Web Applications</h2>
        <p className="services-text">
          From initial concept to deployment, I create fully functioning single-page applications tailored with private dashboards, forms, and custom workflows built from the ground up.
        </p>


        <Link to="/" className="home-button">
          Go To Home
        </Link>
      </div>
    </div>
  )
}

export default ServicesPageScreen;
