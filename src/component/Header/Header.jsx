import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

const HEADER = () => {
  return (
    <div>
        <section>
      <header>
        <div className="nav-link-text"><Link to="/">HOME</Link></div>
        <div className="nav-link-text"><Link to="/About-Us">ABOUT</Link></div>
        <div className="nav-link-text"><Link to="/contact-us">CONTACT</Link></div>
        <div className="nav-link-text"><Link to="/Services">SERVICES</Link></div>
      </header>
    </section>

    </div>
  )
}

export default HEADER
