import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Signup = () => {
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
    console.log(userData);
    if (!userData.username || !userData.password) {
      alert("Please fill in both fields");
      return;
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Please SignUP to your account</p>
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
          <button type="submit">Sign Up</button>
          <Link to="/login" className="signup-link">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
