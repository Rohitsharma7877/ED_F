import React from 'react';
import './services.css';

const data = [
  {
    id: 1,
    imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    items: "Doctor Appointment",
    buttons: ["ENQUIRY", "BOOK NOW"],
  },
  {
    id: 2,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctaYSg9FQyQQEA14Y2b-ZcrE3bag9gFpozQ&s",
    items: "Lab Tests",
    buttons: ["ENQUIRY", "CALL US"],
  },
  {
    id: 3,
    imageUrl: "https://www.rumcsi.org/wp-content/uploads/2020/09/Radiology-scaled.jpg",
    items: "Radiology",
    buttons: ["ENQUIRY", "CALL US"],
  },
  {
    id: 4,
    imageUrl: "https://www.shutterstock.com/image-photo/orthopedics-surgeon-doctor-examining-patients-600nw-2413206049.jpg",
    items: "X-Ray",
    buttons: ["ENQUIRY", "BOOK NOW"],
  },{
    id: 5,
    imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    items: "Doctor Appointment",
    buttons: ["ENQUIRY", "BOOK NOW"],
  },
  {
    id: 6,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctaYSg9FQyQQEA14Y2b-ZcrE3bag9gFpozQ&s",
    items: "Lab Tests",
    buttons: ["ENQUIRY", "CALL US"],
  },
  {
    id: 7,
    imageUrl: "https://www.rumcsi.org/wp-content/uploads/2020/09/Radiology-scaled.jpg",
    items: "Radiology",
    buttons: ["ENQUIRY", "CALL US"],
  },
  {
    id: 8,
    imageUrl: "https://www.shutterstock.com/image-photo/orthopedics-surgeon-doctor-examining-patients-600nw-2413206049.jpg",
    items: "X-Ray",
    buttons: ["ENQUIRY", "BOOK NOW"],
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-grid">
        {data.map((item) => (
          <div key={item.id} className="services-card">
            <img src={item.imageUrl} alt={item.items} className="services-image" />
            <h2 className="services-title">{item.items}</h2>
            <div className="services-buttons">
              {item.buttons.map((button, index) => (
                <button key={index} className="services-button">
                  {button}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
