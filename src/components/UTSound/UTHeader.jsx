import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from "./indianGroupDoctors.jpg";
import "./UTHeader.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Make sure path is correct
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UTHeader = () => {
  const [showForm, setShowForm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();
  const [uthTests, setUTHTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(true);
 const { token, user } = useAuth();


  useEffect(() => {
    const fetchUtsTests = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/subcategories");
        const data = await response.json();

        if (response.ok) {
          // Filter for X-Ray tests using the subCategory field
          const uthTests = data.data.filter(
            (test) => test.subCategory === "Ultrasonography"
          );
          setUTHTests(uthTests);
        }
      } catch (error) {
        console.error("Error fetching Ultrasonography tests:", error);
      } finally {
        setLoadingTests(false);
      }
    };

    fetchUtsTests();
  }, []);

  const handleBookNowClick = () => {
     if (!token) {
       toast.error("Please login to book an appointment");
 
       // Delay navigation to allow toast to render
       setTimeout(() => {
         navigate("/log-in", { state: { from: "/ultrasonography" } });
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
      serviceType: "Ultrasonography",
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      age: formData.get("age"),
      gender: formData.get("gender"),
      appointmentDate: formData.get("appointmentDate"),
      testName: formData.get("testName"),
      userId: user?._id, // Associate with user if logged in
      status: "pending", // Add test name to the booking data
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
    <div className="uTHeade-main1">
      <div className="uTHeade-main2">
        <div className="uTHeade-box">
          <div className="uTHeade-title-box">
            <h1 className="uTHeade-title">Ultrasonography</h1>
            <p className="uTHeade-title2">
              Ultrasonography is a non-invasive imaging technique that uses
              high-frequency sound waves to visualize internal body structures
              and diagnose medical conditions.
            </p>
            <div className="uTHeade-buttons">
              <button className="uTHeade-btn" onClick={handleBookNowClick}>
                Book Now
              </button>
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

                {/* Add the test selection dropdown here */}
                <div className="uT-book-form-name">
                  <label>Select Test Name:</label>
                  <select name="testName" required>
                    <option value="">-- Select a Test --</option>
                    {loadingTests ? (
                      <option value="" disabled>
                        Loading tests...
                      </option>
                    ) : (
                      <>
                        {uthTests.length === 0 ? (
                          <option value="" disabled>
                            No X-Ray tests available
                          </option>
                        ) : (
                          uthTests.map((test) => (
                            <option key={test._id} value={test.title}>
                              {test.title}
                            </option>
                          ))
                        )}
                      </>
                    )}
                  </select>
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
                {/* <div className="uT-book-form-name">
                  <label>Appointment Date:</label>
                  <input
                    type="date"
                    name="appointmentDate" 
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div> */}
                <button type="submit" className="uT-form-submit-btn">
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

export default UTHeader;
