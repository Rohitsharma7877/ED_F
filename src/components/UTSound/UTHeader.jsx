import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import './UTHeader.css'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";


const UTHeader = () => {
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
      serviceType: "Ultrasonography", // Set this according to your service
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      appointmentDate: formData.get("appointmentDate"),
    };

    try {
      const response = await fetch(
        "http://localhost:4000/api/service-bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
    <div className="uTHeade-main1">
      <div className="uTHeade-main2">
        <div className="uTHeade-box">
          <div className="uTHeade-title-box">
            <h1 className="uTHeade-title">Ultrasonography</h1>
            <p className="uTHeade-title2">
            Ultrasonography is a non-invasive imaging technique that uses high-frequency sound waves to visualize internal body structures and diagnose medical conditions.
            </p>
            <div className="uTHeade-buttons">
            <button className="uTHeade-btn" onClick={() => setShowForm(true)}>Book Now</button>
          </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="uT-form-overlay">
          <div className={`uT-form-wrapper ${isExpanded ? "expanded" : ""}`}>
            {/* Left Section: Image */}
            <div className="uT-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="uT-form-container">
              {/* Close Icon */}
              <button className="uT-form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="uT-book-test-tittle">Book Your Appointment</h2>
              <form className="uT-book-test-form" onSubmit={handleBookNow}>
                <div className="uT-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" // Add name attribute
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="uT-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email" // Add name attribute
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="uT-book-form-name">
                  <label>Mobile:</label>
                  <input
                    type="tel"
                    name="mobile" // Add name attribute
                    placeholder="Enter your Mobile"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit mobile number"
                  />
                </div>
                <div className="uT-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age" // Add name attribute
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="uT-book-form-name">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gender" // Add name attribute
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
                <div className="uT-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <button type="submit" className="uT-form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UTHeader