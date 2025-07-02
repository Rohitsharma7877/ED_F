import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import doctor from "./indianGroupDoctors.jpg";
import "./xRayHeader.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const XRayHeader = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [xRayTests, setXRayTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(true);
  const navigate = useNavigate();
  const { token, user } = useAuth();


  useEffect(() => {
    const fetchXRayTests = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/subcategories");
        const data = await response.json();

        if (response.ok) {
          // Filter for X-Ray tests using the subCategory field
          const xRayTests = data.data.filter(
            (test) => test.subCategory === "X-Ray" || test.title.includes("X-Ray")
          );
          setXRayTests(xRayTests);
        }
      } catch (error) {
        console.error("Error fetching X-Ray tests:", error);
      } finally {
        setLoadingTests(false);
      }
    };

    fetchXRayTests();
  }, []);

 const handleBookNowClick = () => {
     if (!token) {
       toast.error("Please login to book an appointment");
 
       // Delay navigation to allow toast to render
       setTimeout(() => {
         navigate("/log-in", { state: { from: "/x-ray" } });
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
    const data = {
      serviceType: "X-Ray",
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

  return (
    <div className="xRayHeader-main1">
      <div className="xRayHeader-main2">
        <div className="xRayHeader-box">
          <div className="xRayHeader-title-box">
            <h1 className="xRayHeader-title">X-Ray Services</h1>
            <p className="xRayHeader-title2">
              Accurate diagnostics powered by high-tech imaging and
              patient-centric care.
            </p>
            <div className="xRayHeader-buttons">
              <button
                className="xRayHeader-btn"
                onClick={handleBookNowClick}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="xRay-form-overlay">
          <div className={`xRay-form-wrapper ${isExpanded ? "expanded" : ""}`}>
            {/* Left Section: Image */}
            <div className="xRay-form-image-section">
              <img src={doctor} alt="Doctors" className="patient-form-image" />
            </div>

            {/* Right Section: Form */}
            <div className="xRay-form-container">
              {/* Close Icon */}
              <button
                className="xRay-form-close-icon"
                onClick={handleCloseForm}
              >
                <IoClose size={24} color="#f44336" />
              </button>
              <h2 className="xRay-book-test-tittle">Book Your Appointment</h2>
              <form className="xRay-book-test-form" onSubmit={handleBookNow}>
                <div className="xRay-book-form-name">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="xRay-book-form-name">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    maxLength="50"
                  />
                </div>
                <div className="xRay-book-form-name">
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
                <div className="xRay-book-form-name">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter your Age"
                    required
                    maxLength="50"
                  />
                </div>

                {/* Add the test selection dropdown here */}
                <div className="xRay-book-form-name">
                  <label>Select Test Name:</label>
                  <select name="testName" required>
                    <option value="">-- Select a Test --</option>
                    {loadingTests ? (
                      <option value="" disabled>
                        Loading tests...
                      </option>
                    ) : (
                      <>
                        {xRayTests.length === 0 ? (
                          <option value="" disabled>
                            No X-Ray tests available
                          </option>
                        ) : (
                          xRayTests.map((test) => (
                            <option key={test._id} value={test.title}>
                              {test.title}
                            </option>
                          ))
                        )}
                      </>
                    )}
                  </select>
                </div>

                <div className="xRay-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="xRay-book-form-name">
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

                <button type="submit" className="xRay-form-submit-btn">
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

export default XRayHeader;
