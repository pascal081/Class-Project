import React from 'react'
import LandingPageScreen from './Screen/LandingPageScreen';
import {Route, Routes } from "react-router-dom";
import Header from './component/Header/Header';
import ContactUsPageScreen from "./Screen/ContactUsPageScreen";
import AboutUsPageScreen from "./Screen/AboutUsPageScreen";
import ServicesPageScreen from "./Screen/ServicesPageScreen";
import Footer from "./component/Footer/Footer"
import LoginPageScreen from "./Screen/LoginPageScreen" 
import RegistrationPageScreen from "./Screen/RegistrationPageScreen" 




const App = () => (
  <div>

    <Header />
    <Routes>
      <Route path="/" element={<LandingPageScreen />} />
      <Route path="/contactUs" element={<ContactUsPageScreen />} />
      <Route path="/AboutUs" element={<AboutUsPageScreen />} />
      <Route path="/Services" element={<ServicesPageScreen />} />
      <Route path="/Login" element={<LoginPageScreen />} />
      <Route path="/Register" element={<RegistrationPageScreen />} />
      <Route path="/Home" element={<LandingPageScreen />} />
      
    </Routes>


    <Footer />


  </div>
)

export default App
