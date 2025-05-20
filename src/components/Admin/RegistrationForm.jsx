import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toastify styles
import "./registrationForm.css";

const RegistrationForm = () => {
  const [formType, setFormType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    gender: "",
    email: "",
    pincode: "",
    date: "",
    address: "",
    state: "",
    time: "",
    bookFor: "",
    clientName: "",
    doctorRef: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/api/${formType}`,
        formData
      );

      // Display success toast
      toast.success("Form submitted successfully!");
      console.log(response.data);

      // Reset form data after submission
      setFormData({
        name: "",
        mobile: "",
        age: "",
        gender: "",
        email: "",
        pincode: "",
        date: "",
        address: "",
        state: "",
        time: "",
        bookFor: "",
        clientName: "",
        doctorRef: "",
      });
    } catch (error) {
      console.error(error);
      // Display error toast
      toast.error("Error submitting the form");
    }
  };

  return (
    <div className="adminreg-container">
      <div className="adminreg-title">Registration Services</div>
      <select
        onChange={(e) => setFormType(e.target.value)}
        defaultValue=""
        className="adminreg-select"
      >
        <option value="" disabled>
          Select a Service
        </option>
        <option value="admin-general-registration">General Registration</option>
        <option value="admin-home-collection">Home Collection</option>
        <option value="admin-book-appointment">Book Appointment</option>
      </select>

      {formType && (
        <form onSubmit={handleFormSubmit} className="adminreg-form">
          <div className="adminreg-form-group">
            <label className="adminreg-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="adminreg-input"
              required
            />
          </div>
          <div className="adminreg-form-group">
            <label className="adminreg-label">Client Name:</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              className="adminreg-input"
            />
          </div>
          <div className="adminreg-form-group">
            <label className="adminreg-label">Doctor Reference:</label>
            <input
              type="text"
              name="doctorRef"
              value={formData.doctorRef}
              onChange={handleInputChange}
              className="adminreg-input"
            />
          </div>
          <div className="adminreg-form-group">
            <label className="adminreg-label">Book For:</label>
            <input
              type="text"
              name="bookFor"
              value={formData.bookFor}
              onChange={handleInputChange}
              className="adminreg-input"
              required
            />
          </div>
          <div className="adminreg-form-row">
            <div className="adminreg-form-group">
              <label className="adminreg-label">Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="adminreg-input"
                required
              />
            </div>
            <div className="adminreg-form-group">
              <label className="adminreg-label">Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="adminreg-input"
                required
              />
            </div>
          </div>
          <div className="adminreg-form-row">
            <div className="adminreg-form-group">
              <label className="adminreg-label">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="adminreg-select"
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="adminreg-form-group">
              <label className="adminreg-label">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="adminreg-input"
                required
              />
            </div>
          </div>
          <div className="adminreg-form-group">
            <label className="adminreg-label">Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="adminreg-input"
              required
            />
          </div>
          <div className="adminreg-form-group">
            <label className="adminreg-label">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="adminreg-input"
            />
          </div>
          <div className="adminreg-form-group">
            <label className="adminreg-label">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="adminreg-input"
            />
          </div>
          <div className="adminreg-form-row">
            <div className="adminreg-form-group">
              <label className="adminreg-label">Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="adminreg-input"
                required
              />
            </div>
            <div className="adminreg-form-group">
              <label className="adminreg-label">Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="adminreg-input"
              />
            </div>
          </div>
          <button type="submit" className="adminreg-button">
            Submit
          </button>
        </form>
      )}

      {/* ToastContainer for showing the success/error messages */}
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
