import React from "react";
import "./whyMammography.css"; // Import the updated CSS file
import { FaXRay } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";

const WhyMammography = () => {
  const features = [
    {
      icon: <FaXRay className="mammography-icon" />,
      title: "Early Detection",
      description:
        "Mammography helps in detecting breast cancer at an early stage.",
    },
    {
      icon: <BsPersonBadge className="mammography-icon" />,
      title: "Non-Invasive",
      description:
        "The procedure is quick, safe, and non-invasive with minimal discomfort.",
    },
    {
      icon: <FaClock className="mammography-icon" />,
      title: "Timely Results",
      description:
        "Mammography provides timely results, enabling faster diagnosis.",
    },
  ];

  return (
    <section className="why-mammography-section">
      <h2 className="why-mammography-title">Why Mammography?</h2>
      <div className="why-mammography-grid">
        {features.map((feature, index) => (
          <div className="why-mammography-item" key={index}>
            {feature.icon}
            <h3 className="why-mammography-item-title">{feature.title}</h3>
            <p className="why-mammography-item-description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMammography;
