import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaGlobe, FaPhoneVolume } from "react-icons/fa6"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import "./doctorportal.css";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure path is correct
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure this path is correct


const DoctorPortal = () => {
   const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
const [loadingTests, setLoadingTests] = useState(true);
  const navigate = useNavigate();
  const { token, user } = useAuth();// Get the auth token from context

  // Check if user is logged in
  const isLoggedIn = () => {
    return token !== null;
  };

  const handleBookNowClick = () => {
  if (!isLoggedIn()) {
    toast.error("Please login to book an appointment");

    // Delay navigation to give time for the toast to show
    setTimeout(() => {
      navigate("/log-in");
    }, 3000);

    return;
  }

  setShowForm(true);
  setIsExpanded(true);
};

const handleBookNow = async (e) => {
  e.preventDefault();
  
  if (!isLoggedIn()) {
    toast.error("Please login to book an appointment");
    navigate("/log-in");
    return;
  }

  // Get form data
  const formData = new FormData(e.target);
  const data = {
    serviceType: "Doctor Portal",
    testName: "Doctor Consultation", // Add default test name
    name: formData.get("name"),
    email: formData.get("email"),
    mobile: formData.get("mobile"),
    age: formData.get("age"),
    gender: formData.get("gender"),
    appointmentDate: formData.get("appointmentDate"),
    userId: user?._id,
    status: "pending" // Add default status
  };

  try {
    const response = await fetch("https://ed-b-1.onrender.com/api/service-bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit booking");
    }

    const result = await response.json();
    toast.success("Appointment submitted successfully!");
    handleCloseForm();
  } catch (error) {
    console.error("Error submitting booking:", error);
    toast.error(error.message || "Failed to submit appointment. Please try again.");
  }
};

const handleCloseForm = () => {
    setShowForm(false);
    setIsExpanded(false);
  };

  return (
    <div className="doctorPortals-main1">
      {/* Main Content */}
      <div className="doctorPortals-main2">
        <div className="doctorPortals-box">
          <div className="doctorPortals-title-box">
            <h1 className="doctorPortals-title">Patient Registration</h1>
            <p className="doctorPortals-title2">
              Patient registration is the process of collecting essential
              patient details, ensuring accurate records for seamless healthcare
              delivery and efficient management.
            </p>
            <div className="doctorPortals-buttons">
              <button className="doctorPortals-btn" onClick={handleBookNowClick}>
        Book Now
      </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="patients-contact-section">
        <div className="patients-contact-info">
          <FaPhoneVolume className="patients-contact-icon" />
          <p>+91 coming soon</p>
        </div>
        <div className="patients-contact-info">
          <FaWhatsapp className="patients-contact-icon" />
          <p>+91 coming soon</p>
        </div>
        <div className="patients-contact-info">
          <FaEnvelope className="patients-contact-icon" />
          <p>info@expertdiagnostics.in</p>
        </div>
        <div className="patients-contact-info">
          <FaGlobe className="patients-contact-icon" />
          <p>www.expertdiagnostics.in</p>
        </div>
      </div>

      <div className="locationss-section">
        <div className="icon-wrap">
          <FaMapMarkerAlt className="locationss-icon" />
        </div>
        <div className="address-text">
          <p className="text-sm text-gray-600">
            <span className="text-black">Address:</span>&nbsp; Expert
            Diagnostics Ground Floor Sri Venkatadri Arcade (Next to Reliance
            Smart) 3rd Cross, 1st Main K R Puram, Hassan, Karnataka - 573201
          </p>
        </div>
      </div>

      {/* form section */}
      {showForm && (
        <div className="patients-form-overlay">
          <div
            className={`patients-form-wrapper ${isExpanded ? "expanded" : ""}`}
          >
            {/* Left Section: Image */}
            <div className="patients-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="patients-form-container">
              {/* Close Icon */}
              <button
                className="patients-form-close-icon"
                onClick={handleCloseForm}
              >
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="patients-book-test-tittle">
                Book Your Appointment
              </h2>
              <form
                className="patients-book-test-form"
                onSubmit={handleBookNow}
              >
                <div className="patients-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" 
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="patients-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="patients-book-form-name">
                  <label>Mobile:</label>
                  <input
                    type="tel"
                    name="mobile" 
                    placeholder="Enter your Mobile"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit mobile number"
                  />
                </div>
                <div className="patients-book-form-name">
                  <label>Age:</label>
                  <input
                    type="Number"
                    name="age" 
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="patients-book-form-name">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gender"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className="patients-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <button type="submit" className="patients-form-submit-btn">
                  Submit
                </button>

                {/* {!isLoggedIn  ? (
                  <button onClick={() => setIsLoggedIn(true)} className="patient-form-submit-reg-btn">Login</button>
                ) : (
                  <button onClick={() => setIsLoggedIn(false)} className="patient-form-submit-reg-btn">Logout</button>
                )} */}
              </form>
            </div>
          </div>
        </div>
        
      )}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default DoctorPortal;
