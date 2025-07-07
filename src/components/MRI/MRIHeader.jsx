import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import doctor from "./indianGroupDoctors.jpg";
import "./mriHeader.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure path is correct
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MRIHeader = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mriTests, setMriTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(true);
  const navigate = useNavigate();
  const { token, user } = useAuth();

  // Check if user is logged in
  const isLoggedIn = () => {
    return token !== null;
  };

  // In your MRIHeader.jsx
  useEffect(() => {
    const fetchTestNames = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/subcategories/test-names"
        );
        const data = await response.json();

        if (response.ok) {
          const mriTests = data.data.filter(
            (test) => test.subCategory === "MRI" || test.title.includes("MRI") // optional: also include tests with "MRI" in title
          );
          setMriTests(mriTests);
        }
      } catch (error) {
        console.error("Error Fetching Test Names:", error);
      } finally {
        setLoadingTests(false);
      }
    };

    fetchTestNames();
  }, []);

  const handleBookNowClick = () => {
    if (!token) {
      toast.error("Please login to book an appointment");

      // Delay navigation to allow toast to render
      setTimeout(() => {
        navigate("/log-in", { state: { from: "/mri" } });
      }, 3000); // Delay for 1.5 seconds
      return;
    }

    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setIsExpanded(false);
  };

  const handleBookNow = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login to book an appointment");
      navigate("/log-in");
      return;
    }

    const formData = new FormData(e.target);
    const bookingData = {
      serviceType: "MRI",
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      appointmentDate: formData.get("appointmentDate"),
      testName: formData.get("testName"),
      userId: user?._id, // Associate with user if logged in
      status: "pending", // Initial status
    };

    try {
      const response = await fetch(
        "http://localhost:4000/api/service-bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        throw new Error(await response.text());
      }

      toast.success("Appointment booked successfully!");
      setShowForm(false);

      // Optional: Refresh admin panel data
      if (user?.role === "admin") {
        // Logic to refresh admin data
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error(error.message || "Failed to book appointment");
    }
  };

  return (
    <div className="mRIHeader-main1">
      <div className="mRIHeader-main2">
        <div className="mRIHeader-box">
          <div className="mRIHeader-title-box">
            <h1 className="mRIHeader-title">MRI Diagnostics</h1>
            <p className="mRIHeader-title2">
              Your health deserves the best care. Experience precision
              diagnostics with our state-of-the-art MRI technology for accurate
              results and faster recovery.
            </p>
            <div className="mRIHeader-buttons">
              <button className="mRIHeader-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="mri-form-overlay">
          <div className={`mri-form-wrapper ${isExpanded ? "expanded" : ""}`}>
            {/* Left Section: Image */}
            <div className="mri-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="mri-form-container">
              {/* Close Icon */}
              <button className="mri-form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="mri-book-test-tittle">Book Your Appointment</h2>
              <form className="mri-book-test-form" onSubmit={handleBookNow}>
                <div className="mri-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" // Add name attribute
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mri-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email" // Add name attribute
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="mri-book-form-name">
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
                <div className="mri-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age" // Add name attribute
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>

                <div className="mri-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="mri-book-form-name">
                  <label>Select Test Name:</label>
                  <select name="testName" required>
                    <option value="">-- Select a Test --</option>
                    {loadingTests ? (
                      <option value="" disabled>
                        Loading tests...
                      </option>
                    ) : (
                      <>
                        {mriTests.length === 0 ? (
                          <option value="" disabled>
                            No MRI tests available
                          </option>
                        ) : (
                          mriTests.map((test) => (
                            <option key={test._id} value={test.title}>
                              {test.title}
                            </option>
                          ))
                        )}
                      </>
                    )}
                  </select>
                </div>

                <div className="mri-book-form-name">
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

                <button type="submit" className="mri-form-submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MRIHeader;
