import React from 'react'
import LandingPageScreen from './Screen/LandingPageScreen';
import {Route, Routes } from "react-router-dom";
import Header from './component/Header/Header';
import ContactUsPageScreen from "./Screen/ContactUsPageScreen";
import AboutUsPageScreen from "./Screen/AboutUsPageScreen";
import ServicesPageScreen from "./Screen/ServicesPageScreenScreen";
import Footer from "./component/Footer/Footer"



const App = () => {
  return (
    <div>

     <Header/>
      <Routes>
       < Route path="/" element={<LandingPageScreen/>}/>
       < Route path="/contact-us" element={<ContactUsPageScreen/>}/>
       < Route path="/About-us" element={<AboutUsPageScreen/>}/>
       < Route path="/Services" element={<ServicesPageScreen/>}/>
      </Routes>


      <Footer/>
    
  
    </div>
  )
}

export default App
