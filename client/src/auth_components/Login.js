import React from "react";
import { loginUser } from "../hooks/auth/index.js";
import "./index.css";

const LoginPage = ({ setCurrentUser }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(formData);
      setCurrentUser(formData.username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form className="formContainer">
        <div className="loginInput">
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
            className="loginInput"
          />
        </div>

        <div className="loginInputContainer">
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter password"
            className="loginInput"
          />
        </div>

        <div>
          <div>
            <button
              type="submit"
              className="loginButton"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
            <button type="button" className="loginButton" href="/">
              Cancel
            </button>
          </div>

          <div>
            <a className="link" href="/signup">
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
