import React from "react";
import { loginUser } from "../hooks/auth.js";
import "./index.css";

const LoginPage = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      if (!response.message == "User successfully logged in!") {
        setError(response.message);
      } else {
        localStorage.setItem("currentUser", formData.username);
        window.location.href = "/courses";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form className="formContainer">
        <div className="inputContainer">
          <label htmlFor="username" className="inputLabel">
            Username
          </label>
          <input
            type="text"
            value={formData.username}
            required
            name="username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Enter username"
            display="none"
            className="input"
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password" className="inputLabel">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
            className="input"
          />
        </div>

        {error && <div className="errorMessage">{error}</div>}

        <div>
          <div>
            <button
              type="submit"
              className="formButton"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
            <button type="button" className="formButton" href="/">
              Cancel
            </button>
          </div>

          <div className="formRedirect">
            Not a registered user?{" "}
            <a className="redirectLink" href="/signup">
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
