import React from "react";
import { loginUser } from "../hooks/auth/index.js";

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
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formData.username}
            required
            name="username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            placeholder="Choose Username"
            display="none"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Choose Password"
          />
        </div>

        <div>
          <div>
            <button type="submit" onClick={(e) => handleLogin(e)}>
              Login
            </button>
            <button type="button" href="/">
              Cancel
            </button>
          </div>

          <div>
            <a href="/signup">Register</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
