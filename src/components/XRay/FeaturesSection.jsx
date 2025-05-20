import React from "react";
import "./FeaturesSection.css";
import { FaXRay } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaXRay className="feature-icon" />,
      title: "High Resolution Imaging",
      description: "Get crystal-clear imaging for precise diagnostics.",
    },
    {
      icon: <BsPersonBadge className="feature-icon" />,
      title: "Patient-Centric Care",
      description: "We prioritize your comfort and well-being.",
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: "Quick Results",
      description: "Timely reports to ensure faster treatment decisions.",
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            {feature.icon}
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
