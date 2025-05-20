import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import doctor from './indianGroupDoctors.jpg'
import "./patientPortal.css";
// import { FaCalendarCheck } from 'react-icons/fa';
// import { FaPhone, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";

const PatientPortal = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="patient-portal">
      {/* Header Section */}
      <div className="header-section">
        <div className="overlay">
          <div className="quick-actions">
            <div className="action">
              <div>
                <img
                  src="https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg"
                  alt=""
                />
              </div>
              <p>BOOK YOUR APPOINTMENT</p>
              <div className="buttons">
                <button className="btn" onClick={handleBookNowClick}>Book me</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-info">
          <FaPhone className="contact-icon" />
          <p>+91 0123456789</p>
        </div>
        <div className="contact-info">
          <FaWhatsapp className="contact-icon" />
          <p>+91 0123456789</p>
        </div>
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>info@expertdiagnostics.in</p>
        </div>
        <div className="contact-info">
          <FaGlobe className="contact-icon" />
          <p>www.expertdiagnostics.in</p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="locations-section">
        <FaMapMarkerAlt className="locations-icon" />
        <p className="text-gray text-sm">
          <span className="text-black">Address: </span>
          Expert Diagnostics Ground Floor Sri Venkatadri Arcade <br />
          (Next to Reliance Smart) 3rd Cross, 1st Main K R Puram, Hassan -
          573201
        </p>
      </div>
      {showForm && (
        <div className="form-overlay">
          <div className="form-wrapper">
            {/* Left Section: Image */}
            <div className="form-image-section">
              <img
                src={doctor}
                alt="Doctors"
                className="form-image"
              />
            </div>

            {/* Right Section: Form */}
            <div className="form-container">
              {/* Close Icon */}
              <button className="form-close-icon" onClick={handleCloseForm}>
                <IoClose size={24} color="#f44336" />
              </button>
              <h2>Book Your Appointment</h2>
              <form className="book-test-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows="5" required></textarea>
                <button type="submit" className="form-submit-btn">
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

export default PatientPortal;
