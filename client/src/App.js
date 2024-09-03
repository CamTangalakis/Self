import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./auth_components/Login";
import SignUpPage from "./auth_components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
