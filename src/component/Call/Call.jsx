import React from 'react'
import "./Call.css";
import { Link } from 'react-router-dom';

const Call = () => {
  return (
    <div>
      
      {/* <!-- CALL TO ACTION --> */}
       <section className="cta">
        <div className="cta-content">
          <h2>
            Ready To Start learning practical digital  </h2>
            <p>Join us today and start learning practical digital
          skills that can transform your future. 
         </p>
         <Link to="/Login">
         <a href="#" className="cta-button">GET STARTED</a>
         </Link>
        </div>
       </section>
    </div>
  )
}

export default Call
