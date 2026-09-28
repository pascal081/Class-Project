import React from 'react'
import { Link } from 'react-router-dom';
import "./ContactUsPageScreen.css";

const ContactUsPage = () => {
  return (
    <div className="portfolio-contact-view">
      <div className="contact-content-box">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-text">
          Have questions about my technical expertise, ongoing engineering projects, or looking to collaborate? Reach out to me directly through the details below.
        </p>

        <h2 className="contact-subtitle">Direct Email</h2>
        <p className="contact-text">support@pascal.com</p>

        <h2 className="contact-subtitle">Availability Hours</h2>
        <p className="contact-text">Monday through Friday, 9:00 AM – 5:00 PM (UTC)</p>

        <h2 className="contact-subtitle">Response Window</h2>
        <p className="contact-text">I review all direct inquiries and technical collaboration project invites within 12 to 24 hours.</p>

        {/* Link pointing to your Services route path */}
        <Link to="/Services" className="services-button">
          View My Services
        </Link>
      </div>
    </div>
  )
}

export default ContactUsPage
