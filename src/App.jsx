import React from 'react'

const App = () => {
  return (
    <div>
      
    {/* <!--HEADER  --> */}
    <section>
      <header>
        <div className="nav-link-text"><a href="">HOME</a></div>
        <div className="nav-link-text"><a href="">ABOUT US</a></div>
        <div className="nav-link-text"><a href="">CONTACT</a></div>
        <div className="nav-link-text"><a href="">SERVICES</a></div>
      </header>
    </section>

    {/* <!-- HERO SECTION --> */}
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>WELCOME TO PASCAL PAGE</h1>
          <p>
            Learn Fullstack Development, UI/UX, Graphic Designs and other
            digital skills
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
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
          src="./WhatsApp Image 2026-08-03 at 11.30.43.jpeg"
          alt="student learning"
        />
      </div>
    </section>
    {/* <!-- TESTIMONY --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Student</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src="./images.jfif" alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This Academy completely changed my career. i learnt how to design from this program</p>
            </div>
            <div className="card">
                <img src="./images (2).jfif" alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>head the spin me and am confused at first but later it started becoming so clearer thanks to the the program</p>
            </div>
            <div className="card">
                <img src="./images (1).jfif" alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This program helped me to become confident in my design</p>
            </div>
        </div>

      </section>

      {/* <!-- CALL TO ACTION --> */}
       <section className="cta">
        <div className="cta-content">
          <h2>
            Ready To Start learning practical digital  </h2>
            <p>Join us today and start learning practical digital
          skills that can transform your future. 
         </p>
         <a href="#" className="cta-button">GET STARTED</a>
        </div>
       </section>


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

                <a href="">HOME</a>
                <a href="">About</a>
                <a href="">Courses</a>
                <a href="">Contact</a>

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

export default App
