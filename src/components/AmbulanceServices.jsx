import React, { useState } from "react";
import "./ambulanceServices.css";
import ambulanceImage from "../components/assests/ambulance2.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AmbulanceServices = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    gender: "",
    email: "",
    pickUpLocation: "",
    dropLocation: "",
    date: "",
    conditionTest: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
    general: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    
    if (
      !formData.name ||
      !formData.age ||
      !formData.gender ||
      !formData.email ||
      !formData.pickUpLocation ||
      !formData.dropLocation ||
      !formData.date
    ) {
      newErrors.general = "Please fill all required fields.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "http://localhost:4000/api/ambulance-services",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Ambulance service booked successfully!");
        setFormData({
          name: "",
          mobile: "",
          age: "",
          gender: "",
          email: "",
          pickUpLocation: "",
          dropLocation: "",
          date: "",
          conditionTest: false,
        });
      } else {
        const errorData = await response.json();
        toast.error(
          errorData.message || "Error in requesting ambulance. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error in booking ambulance service. Please try again.");
    }

    setIsSubmitting(false);
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${date}`;
  };

  return (
    <div className="ambulance-services-main">
      <div className="ambulance-services-container">
        <div className="ambulance-services-image-container">
          <img src={ambulanceImage} alt="Ambulance Service" />
        </div>

        <div className="ambulance-services-form-container">
          <h2 className="ambulance-services-heading">
            Ambulance Service
          </h2>

          <form
            className="ambulance-services-details-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please Provide Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error-text">{errors.name}</span>}

            <label htmlFor="mobile">Mobile Number*</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && (
              <span className="error-text">{errors.mobile}</span>
            )}

            <label htmlFor="age">Age*</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter Your Age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <label htmlFor="gender">Gender*</label>
            <select
              className="ambulance-services-gender"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}

            <label htmlFor="pickUpLocation">Pick-Up Location*</label>
            <input
              type="text"
              id="pickUpLocation"
              name="pickUpLocation"
              placeholder="Enter Pick-Up Location"
              value={formData.pickUpLocation}
              onChange={handleChange}
              required
            />

            <label htmlFor="dropLocation">Drop Location*</label>
            <input
              type="text"
              id="dropLocation"
              name="dropLocation"
              placeholder="Enter Drop Location"
              value={formData.dropLocation}
              onChange={handleChange}
              required
            />

            <label htmlFor="date">Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              min={getTodayDate()}
              value={formData.date}
              onChange={handleChange}
              required
            />

            <div className="ambulance-services-condition">
              <label>
                <br />
                #Condition Test Above 5000
              </label>
            </div>

            <button
              type="submit"
              className="ambulance-services-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Ambulance Service"}
            </button>
          </form>

          {errors.general && <div className="error-text">{errors.general}</div>}
        </div>
      </div>

      {/* Toast container for success/error messages */}
      <ToastContainer />
    </div>
  );
};

export default AmbulanceServices;
