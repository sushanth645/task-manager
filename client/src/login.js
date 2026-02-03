import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false); // 👈 toggle
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/tasks");
    } catch {
      alert("Invalid credentials");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { email, password });
      alert("Registration successful. Please login.");
      setIsNewUser(false); // switch back to login
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto" }}>
      <h2>{isNewUser ? "Register" : "Login"}</h2>

      <form onSubmit={isNewUser ? handleRegister : handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* MAIN BUTTON */}
        <button type="submit">
          {isNewUser ? "Register" : "Login"}
        </button>
      </form>

      {/* TOGGLE BUTTON */}
      <p style={{ marginTop: "10px" }}>
        {isNewUser ? "Already have an account?" : "New user?"}{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setIsNewUser(!isNewUser)}
        >
          {isNewUser ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
}




