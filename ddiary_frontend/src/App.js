import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 
import WelcomePage from './WelcomePage';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className='App'>
      <> 
      {/* This is the alias of BrowserRouter i.e. Router */} 
      <Router> 
        <Routes> 
          {/* This route is for landing page component  
          with exact path "/", in component props  
          we passes the imported component*/} 
          <Route exact path="/" element={ <LandingPage/> } /> 
            
          {/* This route is for welcome page component  
          with exact path "/welcome-page", in component  
          props we passes the imported component*/} 
          <Route path="/welcome-page" element={ <WelcomePage/> } /> 
            
          {/* If any route mismatches the upper  
          route endpoints then, redirect triggers  
          and Navigates app to home component with to="/" */} 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes> 
      </Router> 
    </> 
    </div>
  );
}

export default App;
