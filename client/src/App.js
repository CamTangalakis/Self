import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/common/Landing.js";
import LoginPage from "./auth_components/Login";
import SignUpPage from "./auth_components/SignUp";
import Header from "./pages/common/Header.js";
import Footer from "./pages/common/Footer.js";

const Pages = [
  { title: "Courses", link: "/" },
  { title: "Grades", link: "/" },
  { title: "Explore", link: "/" },
];

function App() {
  const [currentUser, setCurrentUser] = React.useState("");

  return (
    <div className="App">
      <div className="content">
        <Header pages={Pages} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={<LoginPage setCurrentUser={setCurrentUser} />}
          />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer currentUser={currentUser} />
      </div>
    </div>
  );
}

export default App;
