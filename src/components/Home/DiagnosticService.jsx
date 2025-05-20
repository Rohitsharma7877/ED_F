import React, { useState } from "react";
import "./diagnosticsService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiCloseFill } from "react-icons/ri";
import d1 from "./serviceMRI.jpg";
import d2 from "./ctscancard.jpg";
import d3 from "./xRayCard.jpeg";
import d4 from "./ultrasoundCard.jpeg";
import d5 from "./mammogramachine.jpg";
import d6 from "./Treadmill-Header.jpg";
import d7 from "./Portable-ECG-Machine.png";
import d8 from "./1683702062645b412eb1c4e.jpg";
import d9 from "./consultation.jpg";
import d10 from "./ambulance.jpg";
import d11 from "./hc.jpg";
import d12 from "./lab.jpg";

const DiagnosticService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    gender: "",
    email: "",
    pincode: "",
    pickUpLocation: "",
    dropLocation: "",
    conditionTest: false,
    bookingDate: new Date().toISOString().split("T")[0], // Initialize conditionTest
  });

  const services = [
    {
      id: 9,
      image: d9,
      title: "Free Consultation",
      description: "Book a free consultation with our expert doctors.",
      redirectTo: "/", 
    },
    {
      id: 10,
      image: d10,
      title: "Ambulance Service",
      description:
        "We provide ambulance services for transportation and emergency needs.",
      redirectTo: "/ambulance-service", // Redirect to ambulance service page
    },
    {
      id: 11,
      image: d11,
      title: "Home Collection",
      description:
        "We offer home collection services for lab tests and diagnostic samples.",
      formFields: [
        {
          placeholder: "Pick-Up Address",
          type: "text",
          name: "pickUpLocation",
        },
      ],
      redirectTo: "/home-collection", 
    },
    {
      id: 12,
      image: d12,
      title: "Lab Test",
      description:
        "We provide a wide range of diagnostic lab tests to suit your needs.",
        redirectTo: "/all-test", 
    },
    {
      id: 1,
      image: d1,
      title: "MRI",
      description:
        "We utilize state-of-the-art 1.5 Tesla MRI machines for high-precision imaging, ensuring detailed diagnostics and accurate results.",
        redirectTo: "/radiology-test/mri", 
    },
    {
      id: 2,
      image: d2,
      title: "CT-Scan",
      description:
        " 128 slice CT scan systems are installed at various centers, providing advanced imaging for accurate.",
        redirectTo: "/radiology-test/ct-scan", 
    },
    {
      id: 3,
      image: d3,
      title: "X-Ray",
      description:
        "Providing comprehensive radiology services with state-of-the-art X-ray equipment for precise imaging.",
        redirectTo: "/radiology-test/x-ray", 
    },
    {
      id: 4,
      image: d4,
      title: "UltraSound",
      description:
        "All sonography studies, including 2D / 4D imaging, routine scans, Doppler, and advanced diagnostic techniques.",
        redirectTo: "/radiology-test/ultrasonography", 
    },
    {
      id: 5,
      image: d5,
      title: "Mammography",
      description:
        "Equipped with state-of-the-art mammography machines for early detection and prevention of breast cancer, accurate and timely results.",
        redirectTo: "/special-test/mammography", 
    },
    {
      id: 6,
      image: d6,
      title: "TMT (Treadmill Test)",
      description:
        "Using TMT (Treadmill Test) to assess cardiovascular health through exercise stress tests, offering insights into heart function.",
        redirectTo: "/special-test/tmt", 
    },
    {
      id: 7,
      image: d7,
      title: "ECG",
      description:
        "Performing Electrocardiogram (ECG) to diagnose heart conditions with advanced ECG machines, ensuring accurate results.",
        redirectTo: "/special-test/ecg", 
    },
    {
      id: 8,
      image: d8,
      title: "Health Package",
      description:
        "Offering comprehensive health checkup packages that cover all major diagnostics and tests, evaluation and proactive healthcare.",
        redirectTo: "/health-package", 
    },
  ];

  const handleOpenModal = (service) => {
    if (service.redirectTo) {
      window.location.href = service.redirectTo; // Redirect if redirectTo exists
    } else {
      setSelectedService(service);
      setIsModalOpen(true);
      setFormData({
        name: "",
        mobile: "",
        age: "",
        gender: "",
        email: "",
        pincode: "",
        pickUpLocation: "",
        dropLocation: "",
        conditionTest: false,
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setFormData({
      name: "",
      mobile: "",
      age: "",
      gender: "",
      email: "",
      pincode: "",
      pickUpLocation: "", // Reset pickUpLocation
      dropLocation: "", // Reset dropLocation
      conditionTest: false, // Reset conditionTest
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const conditionTest = formData.conditionTest === "on" ? true : false;

    const formWithServiceData = {
      ...formData,
      service: selectedService.title,
      conditionTest: formData.conditionTest,
    };

    try {
      const response = await fetch("https://ed-b.onrender.com/api/form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formWithServiceData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Appointment booked successfully!", {
          autoClose: 500,
          closeButton: false,
        });
        handleCloseModal();
      } else {
        toast.error("Error booking appointment: " + result.message, {
          autoClose: 1000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error("Network or Server Error:", error);
      toast.error("Failed to book appointment.", {
        autoClose: 2000,
        closeButton: true,
      });
    }
  };

  return (
    <div className="diagnosticservice-main">
      <div className="diagnosticservice-container">
        <h2>Our Services </h2>
        <div className="diagnosticservice-cards">
          {services.map((service) => (
            <div key={service.id} className="diagnosticservice-card">
              <img
                src={service.image}
                alt={service.title}
                className="diagnosticservice-card-image"
              />
              <h3 className="diagnosticservice-card-title">{service.title}</h3>
              <p className="diagnosticservice-card-description">
                {service.description}
              </p>
              <div className="diagnosticservice-actions">
                <button
                  className="diagnosticservice-booknow-button"
                  onClick={() => handleOpenModal(service)}
                >
                  {/* <RiLuggageCartFill className="diagnosticservice-icon" /> */}
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* {isModalOpen && selectedService && (
          <div
            className="diagnosticservice-modal-overlay"
            onClick={handleCloseModal}
          >
            <div
              className="diagnosticservice-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="diagnosticservice-modal-image"
                style={{ backgroundImage: `url(${selectedService.image})` }}
              ></div>
              <div className="diagnosticservice-modal-form">
                <button
                  className="diagnosticservice-close-modal"
                  onClick={handleCloseModal}
                >
                  <RiCloseFill className="diagnosticservice-close-icon" />
                </button>
                <h2>Book Appoinment for {selectedService.title}</h2>
                <form onSubmit={handleFormSubmit} className="formBookNow">
                  
                  <input
                    className="diagser"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="diagser"
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    pattern="^[0-9]{10}$"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <input
                    className="diagser"
                    type="number"
                    name="age"
                    placeholder="Age"
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="diagnosticservice-gender-selection">
                    <label>
                      <input
                        className="diagser"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleInputChange}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        className="diagser"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleInputChange}
                      />{" "}
                      Female
                    </label>
                    <label>
                      <input
                        className="diagser"
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={handleInputChange}
                      />{" "}
                      Other
                    </label>
                  </div>
                  <input
                    className="diagser"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    required
                  />

                  <input
                    className="diagser"
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    pattern="^[0-9]{6}$"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="diagser"
                    type="date"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleInputChange}
                    required
                  />

                  {selectedService.formFields &&
                    selectedService.formFields.map((field, index) => (
                      <div key={index}>
                        {field.type === "checkbox" ? (
                          <div className="diagnosticservice-checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="conditionTest"
                                checked={formData.conditionTest}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    conditionTest: e.target.checked,
                                  }))
                                }
                              />
                              {field.label}
                            </label>
                          </div>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={handleInputChange}
                            required
                          />
                        )}
                      </div>
                    ))}
                  <button
                    className="service-submit"
                    type="submit"
                    value="Submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )} */}
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default DiagnosticService;
