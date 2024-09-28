import React from "react";
import "./index.css";

const HomePage = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <span>SELf Educated</span>
        <span className="subheader">a new kind of learning</span>
      </div>

      <div>
        <button className="menuButton">≡</button>
      </div>
    </div>
  );
};

export default HomePage;
