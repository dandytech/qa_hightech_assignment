import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { signup } from "./api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) return;
    setLoading(true);
    try {
      const response = await signup({ username, password });
      setMessage("Signup successful, you can now Login");
      navigate("/login");
      console.log(response);
    } catch (error) {
      setMessage("Signup failed");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSignup}>
      <p className="title">SIGN UP</p>

      <p>
        <div>Username</div>
        <div>
          <input
            placeholder="Enter Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </p>

      <p>
        <div>Password</div>
        <div>
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </p>

      <p>
        <button type="submit"> {loading ? "Logging in..." : "Submit"}</button>
      </p>
      <p>
        {loading && <p>Loading...</p>}
        <p>{message}</p>
      </p>

      <p>
        <span>Already have an account?</span>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
      </p>
    </form>
  );
}
