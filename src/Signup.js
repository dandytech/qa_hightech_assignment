import { NavLink } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { signup } from "./api";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) return;

    try {
      const response = await signup({ username, password });
      setMessage("Signup successful, you can now Login");
    } catch (error) {
      setMessage("Signup failed");
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
        <button type="submit">Submit</button>
      </p>
      <p>
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
