import React, { useState } from "react";
import "./signup.css";
import signupimg from "./logSigimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

const SignUp2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, password } = formData;

    if (!name || !email || !mobile || !password) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mobile validation (optional)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      // Sending data to the backend API using Axios
      const response = await axios.post(
        "http://localhost:4000/person/signup",
        formData
      );

      console.log("Backend Response:", response.data);
      alert("User Registration is successful!");
      navigate("/log-in");
      // Reset form after successful registration
      setFormData({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });

      setUploadedFile(null);
    } catch (err) {
      console.error("Error during signup:", err);
      alert("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="SignUp-main">
      <div className="SignUp-container">
        {/* Left Side - Image */}
        <div className="SignUp-image-container">
          <img src={signupimg} alt="Prescription Illustration" />
        </div>

        {/* Right Side - Form */}
        <div className="SignUp-form-container">
          <h2 className="SignUp-heading">User Registration</h2>

          {/* Form Fields */}
          <form className="SignUp-details-form" onSubmit={handleSubmit}>
            <label htmlFor="name">NAME*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please Provide Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="mobile">Mobile Number*</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* Add the Login Link */}
            <p className="SignUp-login-link">
              Already have an account?{" "}
              <Link to="/log-in" className="login-link">
                Login
              </Link>
            </p>

            <button type="submit" className="SignUp-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
