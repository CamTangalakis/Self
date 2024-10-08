import React from "react";
import "./index.css";

const Header = ({ pages, currentUser }) => {
  let prevScrollPos = window.scrollY;
  window.onscroll = () => {
    let currScrollPos = window.scrollY;
    const el = document.getElementsByClassName("headerContainer")[0];
    console.log(prevScrollPos, currScrollPos, "<<<===");

    if (prevScrollPos < currScrollPos) {
      el.classList.add("hidden");
      el.classList.remove("visible");
    } else if (prevScrollPos > currScrollPos) {
      el.classList.add("visible");
      el.classList.remove("hidden");
    }
    prevScrollPos = currScrollPos;
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

      <div className="headerRight">
        <div className="headerLinks">
          <a href="/" className="link">
            Profile
          </a>
        </div>
        <div className="headerLinks">
          <a href="/" className="link">
            About
          </a>
        </div>
        <div className="headerLinks">
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
    </div>
  );
};

export default Header;
