import React from "react";
import "./OfflineBooking.css";
import offlineBookingImage from "./assests/payOffline.jpg";

const OfflineBooking = () => {
  return (
    <div className="offline-booking-main">
      <div className="offline-booking-container">
        {/* Left Side - Image */}
        <div className="image-container">
          <img src={offlineBookingImage} alt="Offline Booking Illustration" />
        </div>

        {/* Right Side - Content */}
        <div className="content-container">
          <h2 className="heading">Book Your Test Online – Pay at the Center</h2>
          <p className="subheading">
            Book your test online. We'll call to confirm your appointment, and
            you can pay at the center when you visit.
          </p>

          <div className="address-section">
            <h3>Our Location:</h3>
            <div className="address-name">
              <p>
                Expert Diagnostics Ground Floor Sri Venkatadri Arcade (Next to
                Reliance Smart) 3rd Cross, 1st Main K R Puram, Hassan - 573201
              </p>
            </div>
          </div>

          <div className="contact-section">
            <h3>Contact Us:</h3>
            <div className="phone-number">
              <span className="phone-icon">📞</span>
              <span>+91 0123456789</span>
            </div>
          </div>

          <div className="working-hours">
            <h3>Working Hours:</h3>
            <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
            <p>Sunday: 9:00 AM - 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineBooking;
