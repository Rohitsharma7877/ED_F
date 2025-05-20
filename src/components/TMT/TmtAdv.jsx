import React from "react";
import "./tmtAdv.css";
import {
  FaHeartbeat,
  FaShieldAlt,
  FaClock,
  FaTools,
  FaUserMd,
  // FaMapMarkerAlt,
  // FaRegClock,
  // FaLeaf,
  // FaUsers,
  // FaAmbulance,
} from "react-icons/fa"; // Importing new icons

const TmtAdv = () => {
  return (
    <div className="treadmillAdv-container">
      <div className="treadmillAdv-text">
        <h1>Why Choose Us?</h1>
        <div className="treadmillAdv-advantages-list">
          <div className="advantage-box">
            <FaHeartbeat />
            <p>Comprehensive heart health.</p>
          </div>
          <div className="advantage-box">
            <FaShieldAlt />
            <p>Safe and non-invasive.</p>
          </div>
          <div className="advantage-box">
            <FaClock />
            <p>Quick, reliable results.</p>
          </div>
          <div className="advantage-box">
            <FaTools />
            <p>Advanced diagnostic tools.</p>
          </div>
          <div className="advantage-box">
            <FaUserMd />
            <p>Experienced medical team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TmtAdv;
