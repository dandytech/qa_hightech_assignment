import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { login } from "./api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login({ username, password });
      console.log(response);
      localStorage.setItem("hToken", response.data.accessToken);
      setMessage("Login successful");
      navigate("/user");
    } catch (error) {
      setMessage("Login failed: check your credentials and try again");
    } finally {
      setLoading(false); // Stop loader
    }
  };
  return (
    <form className="signup-form" onSubmit={handleLogin}>
      <p className="title">LOGIN</p>

      <p>
        <div>Username</div>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </p>

      <p>
        <div>Password</div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </p>

      <p>
        <button type="submit"> {loading ? "Logging in..." : "Login"}</button>
      </p>
      {loading && <p>Loading...</p>}
      <p>{message}</p>

      <p>
        <span>Don't have an account?</span>
        <NavLink className="link" to="/signup">
          Sign Up
        </NavLink>
      </p>
    </form>
  );
}
