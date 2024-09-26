import React from "react";
import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {
  LandingPage,
  WelcomePage,
  AnalysisPage,
  PageNotFound,
  EarlyRegistration,
  List,
} from "./pages";
import { Header } from "./containers";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Toast from "./components/alerts/alert";


function App() {
  const [data, setData] = React.useState(null);
  const urlWithProxy = "/api/v1";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  // React.useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyBLr-lLuJsCeuSlS1voRLSJoK7WHgWLqVk",
    authDomain: "soul-voyage.firebaseapp.com",
    databaseURL: "https://soul-voyage-default-rtdb.firebaseio.com",
    projectId: "soul-voyage",
    storageBucket: "soul-voyage.appspot.com",
    messagingSenderId: "1063837444265",
    appId: "1:1063837444265:web:04d85abaabfef99606e1b8",
    measurementId: "G-NXL2Z4SRSN",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function checkLocalStorage() {
   // console.log("Checking local storage for email");
   // const email = localStorage.getItem("SavedEmail");
  
   // if (email) {
   //   console.log("Email found in local storage:", email);
      return true;
   // } else {
   //   console.log("Email not found in local storage");
   //   return false;
    //}
  }
  
  const NavigateAndLog = () => {
    console.log("Redirecting back to home page from the welcome page");
    return <Navigate to="/" />;
  };
  
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          {/* <Route path="/sign-in" element={<SignIn />} /> */}
          {/* <Route path="/sign-up" element={<SingUp />} /> */}
          {/* <Route path="/welcome-page" element={<WelcomePage />} /> */}
          {/* <WelcomePageRoute path="/welcome-page" element={<WelcomePage/>} /> */}
          <Route
            path="/welcome-page"
            element={  checkLocalStorage()? <WelcomePage /> : <NavigateAndLog/>}
          />
          <Route path="/all-entries"   element={checkLocalStorage() ? < List /> : <Navigate to="/" />}/>
          <Route path="/analysis-page" element={<AnalysisPage />} />
          <Route path="/early-registration" element={<EarlyRegistration />} />
          <Route path="/header" element={<Header />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
