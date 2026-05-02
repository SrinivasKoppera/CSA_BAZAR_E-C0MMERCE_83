import { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      storedUserData.username === userData.username &&
      storedUserData.password === userData.password
    ) {
      alert("Login successful");
      Cookies.set("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Please login to your account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            // onChange={handleUsernameChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            // onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
          <Link to="/signup" className="signup-link">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
