import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ExpertHeading.css";
import exhp1 from "./exhp1.jpg";
import { GoDotFill } from "react-icons/go";

const ExpertHeading = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle button click
  const handleButtonClick = () => {
    navigate("/"); // Navigate to the Home Page ("/" route)
  };

  return (
    <div className="expertHeading-main1">
      <div className="expertHeading-main2">
        <div className="expertHeading-box1">
          <div className="expertHeading-images-box">
            <img src={exhp1} alt="img" />
          </div>
        </div>
        <div className="expertHeading-box2">
          <div className="expertHeading-box2-tittle">
            <h1>Health Packages</h1>
            <p>Health packages provide comprehensive check-ups to detect early health.</p>
          </div>
          <div className="expertHeading-box2-package">
            <div className="expertHeading-box2-package-title">
              <h1>Popular Packages</h1>
            </div>
            <div className="expertHeading-box2-package-service">
              <div className="expert-one">
                <GoDotFill />
                <span><h1>Home Collection Packages</h1></span>
                <GoDotFill />
                <span><h1>Senior Citizen Packages</h1></span>
                <GoDotFill />
                <span><h1>General Health Packages</h1></span>
              </div>
              <div className="expert-two">
                <GoDotFill />
                <span><h1>Senior Citizen Packages</h1></span>
                <GoDotFill />
                <span><h1>General Health Packages</h1></span>
              </div>
              <div className="expert-three">
                <GoDotFill />
                <span><h1>Home Collection Packages</h1></span>
                <GoDotFill />
                <span><h1>Senior Citizen Packages</h1></span>
                <GoDotFill />
                <span><h1>General Health Packages</h1></span>
              </div>
            </div>
          </div>

          {/* Request a Call Back Button */}
          <div className="expertHeading-box2-help">
            <div className="expertHeading-box2-button">
              <button
                type="button"
                className="expertHeading-submit-btn"
                onClick={handleButtonClick} // Attach click event
              >
                Request a Call Back
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExpertHeading;
