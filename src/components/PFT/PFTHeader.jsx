import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import './PFTHeader.css'
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";


const PFTHeader = () => {
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
      serviceType: "Pulmonary Function Test", // Set this according to your service
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
    <div className="PFTHeader-main1">
          <div className="PFTHeader-main2">
            <div className="PFTHeader-box">
              <div className="PFTHeader-title-box">
                <h1 className="PFTHeader-title">Pulmonary Function</h1>
                <p className="PFTHeader-title2">
                A Pulmonary Function Test (PFT) measures lung capacity and airflow to assess respiratory health and diagnose conditions like asthma, COPD, or other lung diseases.
                </p>
                <div className="PFTHeader-buttons">
                <button className="PFTHeader-btn" onClick={() => setShowForm(true)}>Book Now</button>
              </div>
              </div>
            </div>
          </div>
      {showForm && (
        <div className="pftest-form-overlay">
          <div className={`pftest-form-wrapper ${isExpanded ? "expanded" : ""}`}>
            {/* Left Section: Image */}
            <div className="pftest-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="pftest-form-container">
              {/* Close Icon */}
              <button className="pftest-form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="pftest-book-test-tittle">Book Your Appointment</h2>
              <form className="pftest-book-test-form" onSubmit={handleBookNow}>
                <div className="pftest-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" // Add name attribute
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="pftest-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email" // Add name attribute
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="pftest-book-form-name">
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
                <div className="pftest-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age" // Add name attribute
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="pftest-book-form-name">
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
                <div className="pftest-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <button type="submit" className="pftest-form-submit-btn">
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

export default PFTHeader