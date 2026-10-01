import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
       {/* <!-- HERO SECTION --> */}
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>WELCOME TO PASCAL PAGE</h1>
          <p>
            Learn Fullstack Development, UI/UX, Graphic Designs and other
            digital skills
          </p>
          <Link to="/Login">
          <button>Get Started</button>
          </Link>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
