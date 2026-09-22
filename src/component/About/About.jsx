import React from 'react'
import "./About.css";
import background from "../../assets/background.jpeg";


const About = () => {
  return (
    <div>
       {/* <!-- ABOUT SECTION --> */}
          <section className="about">
            <div className="about-text">
              <h4>ABOUT US</h4>
              <h2>
                building Skills, <br />
                Building Future
              </h2>
      
              <p>
                At digital skills Academy, we provide practical training
                that helps you create a future
              </p>
              <ul>
                <li>&#10004; practical Hands on learning</li>
                <li>&#10004; Experts Instructors</li>
                <li>&#10004; flexible learning schedule</li>
              </ul>
      
              <a href="../PASCAL PROJECT/INDEX.HTML" className="btn">learn More</a>
            </div>
            <div className="about-image">
              <img
                src={background}alt="student learning"/>
            </div>
          </section>
    </div>
  )
}

export default About
