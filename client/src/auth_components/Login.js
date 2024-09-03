import React from "react";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            value={username}
            required
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose username"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose password"
          />
        </div>

        <div>
          <div>
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            <button type="button" href="/">
              Cancel
            </button>
          </div>

          <div>
            <button type="button" href="/signup">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
