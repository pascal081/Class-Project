import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div>
       {/* <!-- FOOTER --> */}
        <footer className="footer">
          <div className="footer-container">
            {/* <!-- About --> */}
             <div className="footer-box">
              <h2>Our Digital Skills Academy</h2>
              <p> Empowering student with practical digital <br /> Skills For a better future</p>
             </div>
             {/* <!-- QUICK LINKS --> */}
              <div className="footer-box">
                <h3>Quick Links</h3>

                {/* Updated to clean, working internal routing links */}
                <Link to="/">HOME</Link>
                <Link to="/About-us">About</Link>
                <Link to="/Services">Services</Link>
                <Link to="/contact-us">Contact</Link>

              </div>

              {/* <!-- CONTACT --> */}
               <div className="footer-box">
                <h3>Contact Us</h3>
                <p>Email: info@example.com</p>
                <p>Phone: +234 000 000 0000</p>
                <p>Owerri: Imo State</p>
               </div>
          </div>

          {/* <!-- COPYRIGHT --> */}
           <div className="copyright">
            <p>&copy; 2026 Our Digital Skills Academy. All Right Reserved</p>
           </div>
           {/* // */}
        </footer>
    </div>
  )
}

export default Footer
