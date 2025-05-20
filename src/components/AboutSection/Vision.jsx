import React from "react";
import "./vision.css";
import vision from './visionlogo.png'
import mission from './target.png'
import goal from './valueIcons.png'


const Vision = () => {
  return (
    <section className="vision-mission-section">
      <h2 className="sectionn-title">Vision & Mission</h2>
      <div className="cardds-container">
        <div className="cardd">
          <img src={vision} alt="Vision Logo" className="cardd-logo" />
          <h3 className="cardd-title">Vision</h3>
          <p className="cardd-description">
          "Providing precise, innovative, and compassionate diagnostic services that are accessible and affordable for everyone."
          </p>
        </div>
        <div className="cardd">
          <img src={mission} alt="Mission Logo" className="cardd-logo" />
          <h3 className="cardd-title">Mission</h3>
          <p className="cardd-description">
          "Delivering accurate and timely diagnostics through advanced technology and expertise for every patient."
          </p>
        </div>
        <div className="cardd">
          <img src={goal} alt="Goal Logo" className="cardd-logo" />
          <h3 className="cardd-title">Our Value</h3>
          <p className="cardd-description">
          "Transforming lives through continuous improvement of healthcare delivery."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
