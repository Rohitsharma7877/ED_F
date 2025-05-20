import React, { useState } from "react";
import "./Header.css";
import HeaderVideo from "./HomeHeader.mp4"; // Import the video file
import axios from "axios"; // Import axios for API requests
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    appointmentDate: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ed-b.onrender.com/api/bookings",
        formData
      );

      // Delay the success toast by 1 second
      setTimeout(() => {
        toast.success("Booking saved successfully!");
      }, 1000); // 1000 milliseconds = 1 second

      console.log(response.data);
      // Clear the form
      setFormData({
        name: "",
        mobileNumber: "",
        appointmentDate: "",
        pincode: "",
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      // Delay the error toast by 1 second
      setTimeout(() => {
        toast.error("Error saving booking. Please try again.");
      }, 1000); // 1000 milliseconds = 1 second
    }
  };

  return (
    <div className="hospital-main">
      <div className="hospital-carousel">
        {/* Background Video */}
        <video className="carousel-video" autoPlay loop muted>
          <source src={HeaderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Book Now Form */}
        <div className="header-book-now-form">
          <h2>Free Consultation!</h2>
          <form onSubmit={handleSubmit}>
            <div className="header-form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                maxLength="50"
              />
            </div>

            <div className="header-form-group">
              <label>Mobile Number:</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit mobile number"
              />
            </div>

            <div className="header-form-group">
              <label>Appointment Date:</label>
              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="header-form-group">
              <label>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter your pincode"
                required
                pattern="[0-9]{6}"
                title="Enter a valid 6-digit pincode"
              />
            </div>

            <button type="submit" className="form-submit">
              Request Call
            </button>
          </form>
        </div>
        {/* ToastContainer component renders the toast notifications */}
        <ToastContainer
          position="top-right"
          autoClose={1000} // Automatically closes the toast after 5 seconds
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default Header;
