import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    console.log("Image clicked, scrolling to top."); // Debugging statement
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="foot-pannel">
        <img
          onClick={scrollToTop}
          src="/assets/images/SoulVoyage-logo.png"
          alt="Soul Voyage Logo"
          className="journal__navbar-soulVoage-logo"
          height={"30px"}
        />
      </div>

      <div className="foot-pannel3">
        <div className="footer_socialMedias">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/facebook_logo.png"
              alt="Soul Voyage Logo"
              className="journal__navbar-soulVoage-logo"
              height={"30px"}
            />
          </a>
          <a
            href="https://www.instagram.com/soulvoyageai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/instagram_logo.png"
              alt="Soul Voyage Logo"
              className="journal__navbar-soulVoage-logo"
              height={"30px"}
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com/company/soulvoyage-mental-health/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/linkedin_logo.png"
              alt="Soul Voyage Logo"
              className="journal__navbar-soulVoage-logo"
              height={"30px"}
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/twitter_logo.png"
              alt="Soul Voyage Logo"
              className="journal__navbar-soulVoage-logo"
              height={"30px"}
            />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/ticktok_logo.png"
              alt="Soul Voyage Logo"
              className="journal__navbar-soulVoage-logo"
              height={"30px"}
            />
          </a>
        </div>
      </div>

      <div className="foot-pannel4">
        <div className="pages">
          <a>Conditions of use </a>
          <a>Privacy Notice </a>
          <a>Help </a>
        </div>
        <div className="copyright">
          © 2024, SoalVoyage.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default Footer;
