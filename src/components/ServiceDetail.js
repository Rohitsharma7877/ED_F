import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  const services = [
    { id: 1, title: "MRI", description: "Magnetic Resonance Imaging details." },
    { id: 2, title: "CT Scan", description: "CT Scan details." },
    { id: 3, title: "X-Ray", description: "X-Ray details." },
    {
      id: 4,
      title: "Ultrasonography",
      description: "Ultrasonography details.",
    },
    { id: 5, title: "Mammography", description: "Mammography details." },
    // Add all other services here
  ];

  const service = services.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-detail">
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
