import React, { useState } from "react";
// import { FaHeart, FaHeartbeat } from "react-icons/fa"; // Import icons from react-icons
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./contactus.css";
import "./leaflet.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch("http://localhost:4000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    alert(data.message || "Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(error.message || "Failed to send message. Please try again.");
  }
};

  return (
    <div className="contactus-container">
      <div className="contactus-header">
        <div className="contactus-left">
          <h2 className="contactus-title">Contact Us </h2>
          <p className="contactus-description">
            We'd love to hear from you! Please fill out the form below or visit
            our location.
          </p>
          <form onSubmit={handleSubmit} className="contactus-form">
            <div className="contactus-form-group">
              <label htmlFor="name">Your Name</label>
              <input
              className="inputName"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="contactus-form-group">
              <label htmlFor="email">Your Email</label>
              <input
              className="inputName"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="contactus-form-group">
              <label htmlFor="email">Mobile Number</label>
              <input
              className="inputName"
                type="Number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your mobile"
                required
              />
            </div>
            <div className="contactus-form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="contactus-submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contactus-right">
          <h3 className="contactus-map-title">Our Location</h3>
          <div className="contactus-map-container">
            <MapContainer
              center={[13.025532, 77.594452]} // Coordinates for Dubai, UAE
              zoom={13}
              style={{ height: "400px", width: "100%" }} // Map size
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[13.025532, 77.594452]}>
                <Popup>
                  <b>Hospilab Technology Private Limited</b>
                  <br />
                  9, 1st Cross Road, Post, Gangenahalli, P&T Colony, RT Nagar,
                  Bengaluru, Karnataka 560032
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs



 