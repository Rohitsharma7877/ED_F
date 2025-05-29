import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import "./Mammography2Header.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

const Mammography2Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [memogTests, setMemogTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(true);

useEffect(() => {
  const fetchTestNames = async () => {
    try {
      // First try fetching from the full subcategories endpoint
      const response = await fetch("http://localhost:4000/api/subcategories");
      const data = await response.json();

      if (response.ok) {
        console.log("All tests:", data.data); // Debug log
        
        // More flexible filtering for Mammography tests
        const memogTests = data.data.filter(test => {
          // Check if subCategory exists and matches Mammography (case-insensitive)
          const isMammography = 
            test.subCategory && 
            test.subCategory.toLowerCase().includes("mammography") &&
            !test.subCategory.toLowerCase().includes("mri"); // Exclude MRI Mammography
              
          return isMammography;
        });

        console.log("Filtered Mammography tests:", memogTests); // Debug log
        setMemogTests(memogTests);
      }
    } catch (error) {
      console.error("Error fetching test names:", error);
    } finally {
      setLoadingTests(false);
    }
  };

  fetchTestNames();
}, []);


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

    const formData = new FormData(e.target);
    const data = {
      serviceType: "Mammography",
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      appointmentDate: formData.get("appointmentDate"),
      testName: formData.get("testName"),
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
    <div className="mammography2Header-main1">
      <div className="mammography2Header-main2">
        <div className="mammography2Header-box">
          <div className="mammography2Header-title-box">
            <h1 className="mammography2Header-title">Mammography</h1>
            <p className="mammography2Header-title2">
              Mammography is an imaging technique used to detect and diagnose
              breast abnormalities, such as tumors or cysts, often crucial for
              early detection of breast cancer.
            </p>
            <div className="mammography2Header-buttons">
              <button
                className="mammography2Header-btn"
                onClick={() => setShowForm(true)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="mammgph-form-overlay">
          <div
            className={`mammgph-form-wrapper ${isExpanded ? "expanded" : ""}`}
          >
            {/* Left Section: Image */}
            <div className="mammgph-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="mammgph-form-container">
              {/* Close Icon */}
              <button
                className="mammgph-form-close-icon"
                onClick={handleCloseForm}
              >
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="mammgph-book-test-tittle">
                Book Your Appointment
              </h2>
              <form className="mammgph-book-test-form" onSubmit={handleBookNow}>
                <div className="mammgph-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" // Add name attribute
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mammgph-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email" // Add name attribute
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mammgph-book-form-name">
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
                <div className="mammgph-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age" // Add name attribute
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>

                <div className="mammgph-book-form-name">
                  <label>Select Test Name:</label>
                  <select name="testName" required>
                    <option value="">-- Select a Test --</option>
                    {loadingTests ? (
                      <option value="" disabled>
                        Loading tests...
                      </option>
                    ) : (
                      <>
                        {memogTests.length === 0 ? (
                          <option value="" disabled>
                            No Mammography tests available
                          </option>
                        ) : (
                          memogTests.map((test) => (
                            <option key={test._id} value={test.title}>
                              {test.title}
                            </option>
                          ))
                        )}
                      </>
                    )}
                  </select>
                </div>
                <div className="mammgph-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="mammgph-book-form-name">
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
                <div className="mammgph-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <button type="submit" className="mammgph-form-submit-btn">
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

export default Mammography2Header;
