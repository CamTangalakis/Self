import React from "react";
import "./index.css";
import { logoutUser } from "../../hooks/auth.js";

const Header = ({ pages, currentUser }) => {
  let prevScrollPos = window.scrollY;
  window.onscroll = () => {
    let currScrollPos = window.scrollY;
    const el = document.getElementsByClassName("headerContainer")[0];

    if (prevScrollPos < currScrollPos && el) {
      el.classList.add("hidden");
      el.classList.remove("visible");
    } else if (prevScrollPos > currScrollPos && el) {
      el.classList.add("visible");
      el.classList.remove("hidden");
    }
    prevScrollPos = currScrollPos;
  };

  const handleLogout = async () => {
    await logoutUser(currentUser);
    localStorage.clear();
  };

  const renderLinks = () => {
    if (currentUser) {
      return (
        <div className="headerRight">
          <div className="headerLinks">
            <a href="/profile" className="link">
              Profile
            </a>
          </div>
          <div className="headerLinks">
            <a href="/about" className="link">
              About
            </a>
          </div>
          <div className="headerLinks" onClick={handleLogout}>
            <a href="/" className="link">
              Log Out
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="headerRight">
          <div className="headerLinks">
            <a href="/about" className="link">
              About
            </a>
          </div>
          <div className="headerLinks">
            <a href="/login" className="link">
              Log In
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <div className="headerLogo">
          <a href="/" className="link">
            ∭
          </a>
        </div>
        <div>
          {pages.map((page) => (
            <span className="headerPages">
              <a href={page.link} className="link">
                {page.title}
              </a>
            </span>
          ))}
        </div>
      </div>

      {renderLinks()}
    </div>
  );
};

export default Header;
