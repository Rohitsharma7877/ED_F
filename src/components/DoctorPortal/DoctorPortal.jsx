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

const DoctorPortal = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    setShowForm(true);
    setIsExpanded(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIsExpanded(false);
  };

  const handleBookNow = async (e) => {
    e.preventDefault();
    
    // Get form data using FormData API
    const formData = new FormData(e.target);
    const data = {
      serviceType: "Doctor Portal", // Set this according to your service
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      appointmentDate: formData.get("appointmentDate"),
    };
  
    try {
      const response = await fetch("https://ed-b.onrender.com/api/service-bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }
  
      const result = await response.json();
      alert("Appointment submitted successfully!");
      handleCloseForm();
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit appointment. Please try again.");
    }
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
              <button
                className="doctorPortals-btn"
                onClick={handleBookNowClick}
              >
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
    </div>
  );
};

export default DoctorPortal;
