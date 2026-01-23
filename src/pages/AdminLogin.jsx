import { useState } from "react";
import api from "../api/api";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        username,
        password
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Login</h2>

      <input placeholder="Username"
        onChange={e => setUsername(e.target.value)} />

      <br /><br />

      <input type="password" placeholder="Password"
        onChange={e => setPassword(e.target.value)} />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
