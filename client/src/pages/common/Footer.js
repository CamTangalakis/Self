import React from "react";

const Footer = ({ currentUser }) => {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <a href="/contact" className="link">
          Contact Us
        </a>
      </div>
      <div className="footerLinks">
        {currentUser ? (
          <a href="/logout" className="link">
            Log Out
          </a>
        ) : (
          <a href="/login" className="link">
            Log In
          </a>
        )}
      </div>
    </div>
  );
};

export default Footer;
