import React from 'react';
import possibilityImage from '../../assets/mental_health.jpeg';
import './possibility.css';


const Possibility = () => {

  const routeRegistration = () =>{ 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="gpt3__possibility section__padding" id="professional_help">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <a href='#' onClick={routeRegistration}>
          <h4>Request Early Access to Get Started</h4>
        </a>
        <h1 className="gradient__text">Professional Help from Personalized Mentor</h1>
        <p>AI-based professional help in mental health is a burgeoning field that harnesses artificial intelligence to enhance mental health services.</p>
        <a href='#' onClick={routeRegistration}>
          <h4>Request Early Access to Get Started</h4>
        </a>
      </div>
    </div>
  )
}

export default Possibility;