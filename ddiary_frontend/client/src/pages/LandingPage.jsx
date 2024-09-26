import React from "react";
import "./landingPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT,
  Header,
  Pricing,
} from "../containers";
import { Brand, CTA, Navbar } from "../components";
import { ToastContainer } from "react-toastify";
import MainHeader from "../containers/header/MainHeader";
import MainSlider from "../containers/slider/Slider";
import AiJournal from "../containers/aiJournal/AiJournal";
import Questions from "../containers/questions/Questions";
import MainFooter from "../containers/footer/MainFooter";
import MainPrice from "../containers/pricing/MainPrice";
import ProfessionalHelp from "../containers/professionalHelp/ProfessionalHelp";
import HowWorks from "../containers/howWork/HowWorks";

const Home = () => {
  return (
	<>
      {/* <MenuBar/> */}
      <div className="gradient__bg">
      <Navbar/>
      
      </div>
      <div className="body-width">
        <MainHeader/>
      </div>
      <MainSlider/>
      <div className="body-widthout-color">
        <AiJournal/>
        <HowWorks/>
      </div>
      <ProfessionalHelp/>
      <div className="body-widthout-color">
        <MainPrice/>
        <Questions/>
        <MainFooter/>
      </div>
      
      {/* <div> */}
        {/* <Header /> */}
        {/* <Brand /> */}
        {/* <WhatGPT /> */}
        {/* <Features /> */}
        {/* <Possibility /> */}
        {/* <CTA />
				<Blog />*/}
         {/* <Pricing /> */}
				{/* <Footer />  */}
       
      {/* </div>  */}
	  </>
  );
};

export default Home;
