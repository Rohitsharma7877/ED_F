import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import "./ctScanHeader.css";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useAuth } from "../context/AuthContext"; // adjust path if needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CTScanHeader = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();
  const [ctScanTests, setCtScanTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(true);
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchCtScanTests = async () => {
      try {
        const response = await fetch("https://ed-b-1.onrender.com/api/subcategories");
        const data = await response.json();

        if (response.ok) {
          // Filter for CT Scan tests using the subCategory field
          const ctTests = data.data.filter(
            (test) =>
              test.subCategory === "CT-Scan" || test.title.includes("CT-Scan")
          );
          setCtScanTests(ctTests);
        }
      } catch (error) {
        console.error("Error fetching CT Scan tests:", error);
      } finally {
        setLoadingTests(false);
      }
    };

    fetchCtScanTests();
  }, []);

  const handleBookNowClick = () => {
    if (!token) {
      toast.error("Please login to book an appointment");

      setTimeout(() => {
        navigate("/log-in", { state: { from: "/ct-scan" } });
      }, 3000); // delay to let toast show
      return;
    }

    setShowForm(true);
    // setIsExpanded(true);
  };

  const handleBookNow = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("Please login to book an appointment");
      navigate("/log-in");
      return;
    }

    const formData = new FormData(e.target);
    const data = {
      serviceType: "CT Scan",
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      appointmentDate: formData.get("appointmentDate"),
      testName: formData.get("testName"),
      userId: user?._id, // Associate with user if logged in
      status: "pending", // Add this line
    };

    // Rest of your function remains the same
    try {
      const response = await fetch(
        "https://ed-b-1.onrender.com/api/service-bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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

  const handleCloseForm = () => {
    setShowForm(false);
    setIsExpanded(false);
  };

  return (
    <div className="ctscanHeader-main1">
      <div className="ctscanHeader-main2">
        <div className="ctscanHeader-box">
          <div className="ctscanHeader-title-box">
            <h1 className="ctscanHeader-title">CT Scan</h1>
            <p className="ctscanHeader-title2">
              A 128-slice CT scan with cardiac CT capability provides
              high-resolution imaging for detailed assessments of the heart and
              other body parts. It ensures accurate diagnoses with faster
              scanning and enhanced clarity.
            </p>
            <div className="ctscanHeader-buttons">
              <button className="ctscanHeader-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="ctscan-form-overlay">
          <div
            className={`ctscan-form-wrapper ${isExpanded ? "expanded" : ""}`}
          >
            {/* Left Section: Image */}
            <div className="ctscan-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="ctscan-form-container">
              {/* Close Icon */}
              <button
                className="ctscan-form-close-icon"
                onClick={handleCloseForm}
              >
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="ctscan-book-test-tittle">Book Your Appointment</h2>
              <form className="ctscan-book-test-form" onSubmit={handleBookNow}>
                <div className="ctscan-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name" // Add name attribute
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="ctscan-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email" // Add name attribute
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="ctscan-book-form-name">
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
                <div className="ctscan-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age" // Add name attribute
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>

                <div className="ctscan-book-form-name">
                  <label>Select Test Name:</label>
                  <select name="testName" required>
                    <option value="">-- Select a Test --</option>
                    {loadingTests ? (
                      <option value="" disabled>
                        Loading tests...
                      </option>
                    ) : (
                      <>
                        {ctScanTests.length === 0 ? (
                          <option value="" disabled>
                            No CT Scan tests available
                          </option>
                        ) : (
                          ctScanTests.map((test) => (
                            <option key={test._id} value={test.title}>
                              {test.title}
                            </option>
                          ))
                        )}
                      </>
                    )}
                  </select>
                </div>

                <div className="ctscan-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" // Add name attribute
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="ctscan-book-form-name">
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

                <button type="submit" className="ctscan-form-submit-btn">
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

export default CTScanHeader;
