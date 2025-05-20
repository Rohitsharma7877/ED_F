import React, { useState } from "react";
import "./HomeCollection.css";
import homecollection from "./assests/homecc.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "./assests/notification.png";
import img2 from "./assests/callCenter.png";

const steps = [
  { id: 1, text: "Enter your address and preferred time", img: img1 },
  { id: 2, text: "Make online payment on website or at your home", img: img2 },
  { id: 3, text: "Our executive will confirm your appointment", img: img2 },
  { id: 4, text: "Get tested at the comfort of your home", img: img2 },
  { id: 5, text: "Get your test report", img: img2 },
];

const HomeCollection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    pinCode: "",
    state: "",
    date: "",
    time: "",
    gender: "", // new field
    bookFor: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
    pinCode: "",
    general: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate fields
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
    if (formData.pinCode.length !== 6) {
      newErrors.pinCode = "Pin Code must be 6 digits.";
    }
    if (
      !formData.name ||
      !formData.address ||
      !formData.state ||
      !formData.date ||
      !formData.time ||
      !formData.gender ||
      !formData.bookFor
    ) {
      newErrors.general = "Please fill all required fields.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return; // Don't submit if validation fails

    setIsSubmitting(true);

    try {
      // API call to save the data to your database
      const response = await fetch(
        "http://localhost:4000/api/home-collection",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Form submitted successfully!");
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          pinCode: "",
          state: "",
          date: "",
          time: "",
          gender: "",
          bookFor: "",
        });
      } else {
        toast.error("Error in submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error in submitting form. Please try again.");
    }

    setIsSubmitting(false);
  };

  // Get today's date for the date picker to prevent past dates
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${date}`;
  };

  return (
    <div className="HomeCollection-main">
      <div className="HomeCollection-main2">
        <div>
          <h2 className="HomeCollection-heading">Home Collection</h2>
        </div>
        {/* craete steps */}
        <div className="HomeCollection-steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <div className="circle">
                <img src={step.img} alt={`Step ${step.id}`} />
              </div>
              <h4>Step {step.id}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="HomeCollection-container">
        <div className="HomeCollection-image-container">
          <img src={homecollection} alt="Prescription Illustration" />
        </div>

        <div className="HomeCollection-form-container">
          {/* <h2 className="HomeCollection-heading">Home Collection</h2>  */}

          {/* input-form */}
          <form className="HomeCollection-details-form" onSubmit={handleSubmit}>
            <label htmlFor="name">NAME*</label>
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

            <label htmlFor="gender">Gender*</label>
            <select
              className="HomeCollection-gender"
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
            {errors.gender && (
              <span className="error-text">{errors.gender}</span>
            )}

            <label htmlFor="bookFor">Book For*</label>
            <select
              className="HomeCollection-bookNow"
              id="bookFor"
              name="bookFor"
              value={formData.bookFor}
              onChange={handleChange}
              required
            >
              <option value="">Select Option</option>
              <option value="own">Own</option>
              <option value="relative">Relative/Guardians</option>
            </select>
            {errors.bookFor && (
              <span className="error-text">{errors.bookFor}</span>
            )}

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

            <label htmlFor="address">Address*</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Please Provide Your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && (
              <span className="error-text">{errors.address}</span>
            )}

            <div className="form-group">
              <div className="flex-container">
                <div className="form-item">
                  <label htmlFor="pinCode">Pin Code*</label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    placeholder="Enter Pin Code"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                  />
                  {errors.pinCode && (
                    <span className="error-text">{errors.pinCode}</span>
                  )}
                </div>
                <div className="form-item">
                  <label htmlFor="state">State*</label>
                  <select
                    className="HomeCollection-state"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select State</option>
                    <option value="Karnataka">Karnataka</option>

                    {/* Add more states here */}
                  </select>
                  {errors.state && (
                    <span className="error-text">{errors.state}</span>
                  )}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                width: "100%",
              }}
            >
              <div style={{ flex: 1 }}>
                <label htmlFor="date">Date*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={getTodayDate()}
                  value={formData.date}
                  onChange={handleChange}
                  required
                  style={{ cursor: "pointer" }}
                />
                {errors.date && (
                  <span className="error-text">{errors.date}</span>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="time">Time*</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  step="3600"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  style={{ cursor: "pointer" }}
                />
                {errors.time && (
                  <span className="error-text">{errors.time}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="HomeCollection-submit-btn"
              disabled={isSubmitting}
              //   style={{ marginTop: "1rem" }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>

          {errors.general && <div className="error-text">{errors.general}</div>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeCollection;
