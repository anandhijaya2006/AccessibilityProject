import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
    const username = "admin";
const password = "1234";

const [user, setUser] = useState("");
const [pass, setPass] = useState("");
const navigate = useNavigate();
  return (
    <>
      

    <div className="login-container">
     <div className="login-card">
          <img
  src="https://img.icons8.com/color/96/accessibility2.png"
  alt="Logo"
  width="80"
/>
<h2 className="login-title">


  AI Powered Accessibility
  <br />
  Enhancement Platform
</h2>

<p
  style={{
    color: "#666",
    fontSize: "16px",
    marginBottom: "25px",
  }}
>
  Welcome! Please login to continue.
</p>
          

          <input
  type="text"
  placeholder="Username"
  value={user}
  onChange={(e) => setUser(e.target.value)}
  className="login-input"

          />

          <input
  type="password"
  placeholder="Password"
  value={pass}
  onChange={(e) => setPass(e.target.value)}
  className="login-input"
/>

          <button
  className="login-btn"
  onClick={() => {
    if (user === username && pass === password) {
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  }}
>
  Login
</button>
        </div>
      </div>
    </>
  );
}

export default Login;