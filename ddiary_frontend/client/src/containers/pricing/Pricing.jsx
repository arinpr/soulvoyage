import React, { useState } from 'react'
import './pricing.css'
import logo1 from '../../assets/icon1.png';
import logo2 from '../../assets/icon1.png';
import logo3 from '../../assets/icon1.png';


const Pricing = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pricing-body" id="pricing">
        <div className="panel pricing-table">
          <div className="pricing-plan">
              <img src={logo1} alt="" className="pricing-img" />
              <h2 className="pricing-header">Basic</h2>
              <ul className="pricing-features">
                  <li className="pricing-features-item">Journal</li>
                  <li className="pricing-features-item">Journal Analysis and emotion tracker</li>
                  <li className="pricing-features-item">Smart Search</li>
              </ul>
              <span className="">Free</span>
              {/* <a href="#/" className="pricing-button">Sign up</a> */}
          </div>

          <div className="pricing-plan">
              <img src={logo2} alt="" className="pricing-img" />
              <h2 className="pricing-header">Monthly Plan</h2>
              <ul className="pricing-features">
                  <li className="pricing-features-item">All in FREE plan</li>
                  <li className="pricing-features-item">Phychologist Recommendations Based On Journals</li>
                  <li className="pricing-features-item">Mindset and Emotional State Analysis</li>
                  <li className="pricing-features-item">Personalized Feedback and Suggestions</li>
                  <li className="pricing-features-item">Motivational Stories</li>
              </ul>
              <span className="">$10 / Month</span>
              {/* <a href="#/" className="pricing-button is-featured">Free trial</a> */}
          </div>

          <div className="pricing-plan">
              <img src={logo3} alt="" className="pricing-img" />
              <h2 className="pricing-header">Annual Plan</h2>
              <ul className="pricing-features">
              <li className="pricing-features-item">All in FREE plan</li>
                  <li className="pricing-features-item">Phychologist Recommendations Based On Journals</li>
                  <li className="pricing-features-item">Mindset and Emotional State Analysis</li>
                  <li className="pricing-features-item">Personalized Feedback and Suggestions</li>
                  <li className="pricing-features-item">Motivational Stories</li>
              </ul>
              <span className="">$100 / Year</span>
              {/* <a href="#/" className="pricing-button">Free trial</a> */}
          </div>
        </div>
    </div>
  );
};

export default Pricing