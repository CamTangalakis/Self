import React from "react";
import { registerUser } from "../hooks/auth";
import "./index.css";

const SignUpPage = ({ setCurrentUser }) => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    userType: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setCurrentUser(formData.username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signupContainer">
      <h1>Register User</h1>
      <form className="formContainer">
        <div className="inputContainer">
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

        <div className="inputContainer">
          <select
            className="selectInput"
            onChange={(e) =>
              setFormData({ ...formData, userType: e.target.value })
            }
            value={formData.userType}
          >
            <option value="" className="selectPlaceholder" disabled>
              Choose user type...
            </option>
            <option value="student">Student</option>
            <option value="educator">Educator</option>
            <option value="administrator">Administrator</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <div>
            <button
              type="submit"
              className="formButton"
              onClick={(e) => handleSignup(e)}
            >
              Register
            </button>
            <button type="button" className="formButton" href="/">
              Cancel
            </button>
          </div>

          <div>
            <a className="link" href="/login">
              Log In
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
