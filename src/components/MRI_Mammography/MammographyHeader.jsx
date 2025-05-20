import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./mamographyHeader.css"; // Assuming you have custom styles
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";




const MammographyHeader = () => {
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
       serviceType: "MRI-Mammography", // Set this according to your service
       name: formData.get("name"),
       email: formData.get("email"),
       mobile: formData.get("mobile"),
       age: formData.get("age"),
       gender: formData.get("gender"),
       appointmentDate: formData.get("appointmentDate"),
     };
 
     try {
       const response = await fetch(
         "https://ed-b.onrender.com/api/service-bookings",
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
    <div className="mammographyHeader-main1">
      <div className="mammographyHeader-main2">
        <div className="mammographyHeader-box">
          <div className="mammographyHeader-title-box">
            <h1 className="mammographyHeader-title">MRI-Mammography</h1>
            <p className="mammographyHeader-title2">
            MRI mammography is an advanced imaging technique used to detect breast cancer by providing detailed images of the breast tissue. It is often used in addition to traditional mammography for high-risk patients or to examine complex cases.
            </p>
            <div className="mammographyHeader-buttons">
              <button className="mammographyHeader-btn" onClick={() => setShowForm(true)}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="mri-mamm-form-overlay">
          <div className={`mri-mamm-form-wrapper ${isExpanded ? "expanded" : ""}`}>
            {/* Left Section: Image */}
            <div className="mri-mamm-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="mri-mamm-form-container">
              {/* Close Icon */}
              <button className="mri-mamm-form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="mri-mamm-book-test-tittle">Book Your Appointment</h2>
              <form className="mri-mamm-book-test-form" onSubmit={handleBookNow}>
                <div className="mri-mamm-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" // Add name attribute
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mri-mamm-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email" // Add name attribute
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mri-mamm-book-form-name">
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
                <div className="mri-mamm-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age" // Add name attribute
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mri-mamm-book-form-name">
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
                <div className="mri-mamm-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <button type="submit" className="mri-mamm-form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MammographyHeader;
