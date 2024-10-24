import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/common/Landing.js";
import LoginPage from "./auth_components/Login";
import SignUpPage from "./auth_components/SignUp";
import Header from "./pages/common/Header.js";
import Footer from "./pages/common/Footer.js";
import Profile from "./pages/profile/index.js";
import About from "./pages/about/index.js";
import Contact from "./pages/contact/index.js";
import Grades from "./pages/grades/index.js";
import Courses from "./pages/courses/index.js";
import Explore from "./pages/explore/index.js";

const Pages = [
  { title: "Courses", link: "/courses" },
  { title: "Grades", link: "/grades" },
  { title: "Explore", link: "/explore" },
];

function App() {
  const [currentUser, setCurrentUser] = React.useState("");
  // React.useEffect(() => {
  //   setCurrentUser("Cam");
  // }, []);

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
          <Route
            path="/signup"
            element={<SignUpPage setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/profile"
            element={<Profile currentUser={currentUser} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/grades"
            element={<Grades currentUser={currentUser} />}
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer currentUser={currentUser} />
      </div>
    </div>
  );
}

export default App;
