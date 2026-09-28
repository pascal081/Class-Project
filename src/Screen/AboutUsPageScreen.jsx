import React from 'react'
import { Link } from 'react-router-dom'; 
import "./AboutUsPageScreen.css"; 

const AboutUsPageScreen = () => {
  return (
    /* The fresh new unique className applied here wraps the page elements perfectly */
    <div className="portfolio-about-view">
      <div className="about-content-box">
        
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Welcome to my portfolio. I am a passionate developer dedicated to building sleek, responsive, and highly secure digital platforms with absolute data integrity and clean code workflows.
        </p>

        <p className="about-text">
          <b>My Mission:</b> To bridge the gap between complex backend architecture and beautiful user interfaces, ensuring seamless performance and exceptional user experiences.
        </p>

        <h2 className="about-subtitle">My Expertise</h2>
        <p className="about-text">
          Every project I build undergoes a rigorous development process—moving smoothly from initial concept and UI design up to secure testing and final production deployment. Using state-of-the-art security practices and modern tools, I build robust applications that protect user privacy and optimize performance.
        </p>

        <h2 className="about-subtitle">Get In Touch</h2>
        <p className="about-text">
          Have questions about my technical background, upcoming projects, or open opportunities? Feel free to contact me at any time for collaboration or direct engineering inquiries.
        </p>

        <Link to="/contact-us" className="about-button">
          Contact Me
        </Link>
        
      </div>
    </div>
  )
}

export default AboutUsPageScreen
