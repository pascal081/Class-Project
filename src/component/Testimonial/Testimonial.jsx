import React from 'react'
import "./Testimonial.css";
import fit from "../../assets/testy.jfif";
import ball from "../../assets/test.jfif";
import foot from "../../assets/testimonial.jfif";

const Testimony = () => {
  return (
    <div>
       {/* <!-- TESTIMONY --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Student</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src={fit} alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This Academy completely changed my career. i learnt how to design from this program</p>
            </div>
            <div className="card">
                <img src={ball} alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>head the spin me and am confused at first but later it started becoming so clearer thanks to the the program</p>
            </div>
            <div className="card">
                <img src={foot} alt="studend Testimonies"/>
                <h3>Oluchi Iwueze</h3>
                <p>This program helped me to become confident in my design</p>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Testimony
