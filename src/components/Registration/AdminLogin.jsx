import React, { useState } from "react";
import loginimg from "./logSigimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons
import "./AdminLogin.css";

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "admin", 
  });
  const [formData, setFormData] = useState({ mobile: "" });
  // const [otp, setOtp] = useState("");
  // const [showOtp, setShowOtp] = useState(false);
  // const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Handle input field changes for Admin login
  const adminHandleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle Admin Login
  const handleAdminSubmit = (e) => {
    e.preventDefault();

    // Dummy credentials for Admin
    const adminCredentials = {
      username: "admin",
      password: "admin@123",
    };

    if (
      credentials.role === "admin" &&
      credentials.username === adminCredentials.username &&
      credentials.password === adminCredentials.password
    ) {
      toast.success("Admin Login Successful!", { position: "top-right" });
      // Save role to localStorage
      localStorage.setItem("role", "admin");
      setTimeout(() => {
        navigate("/admin/dashboard"); 
      }, 1000);
    } else {
      toast.error("Invalid admin credentials. Try again!", {
        position: "top-right",
      });
    }
  };

  // Handle input field changes for User (OTP)
  const userHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  

  

  


  return (
    <div className="adminLogin-main">
      <div className="adminLogin-container">
        {/* Left Side - Image */}
        <div className="adminLogin-image-container">
          <img src={loginimg} alt="adminLogin Illustration" />
        </div>

        {/* Right Side - Form */}
        <div className="adminLogin-form-container">
          <h2 className="adminLogin-heading">
           
            <span
              className={
                credentials.role === "admin" ? "active-link" : "inactive-link"
              }
              onClick={() => setCredentials({ ...credentials, role: "admin" })}
            >
              Admin Login
            </span>
          </h2>

          {/* Admin Login Form */}
          {credentials.role === "admin" && (
            <div className="adminSec-container">
              <form onSubmit={handleAdminSubmit} className="Login-details-form">
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter Username"
                    value={credentials.username}
                    onChange={adminHandleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-input"
                      placeholder="Enter Password"
                      value={credentials.password}
                      onChange={adminHandleChange}
                      required
                    />
                    <span
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                </div>
                <button type="submit" className="adminLogin-button">
                  Admin-Login
                </button>
              </form>
            </div>
          )}

         
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
