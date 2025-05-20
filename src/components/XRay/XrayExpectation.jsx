import React, { useState } from 'react'
import "./XrayExpectation.css"

const XrayExpectation = () => {
    const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="xray-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a X-Ray Test</h1>

      {/* Section Navigation */}
      <div className="xray-section-nav">
        <button
          className={`xray-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`xray-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`xray-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="xray-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="xray-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Doctor’s Instructions:{" "}
                </span>
                Share your medical history, especially if pregnant.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Clothing:
                </span>{" "}
                Wear comfortable clothing; you may need to change into a hospital gown.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Remove Metal Objects:{" "}
                </span>
                Take off jewelry, glasses, or other metal items.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Preparation:{" "}
                </span>
                Some X-rays may require specific positioning or fasting.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Consent:{" "}
                </span>
                You may need to sign a consent form if contrast material is used.
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="xray-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Positioning:{" "}
                </span>
                Stand, sit, or lie down as directed by the technician.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Imaging Process:{" "}
                </span>
                X-ray machine emits radiation to capture internal images.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Stillness:{" "}
                </span>
                Remain still to avoid blurry images.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Quick Procedure:{" "}
                </span>
                The process usually lasts only a few minutes.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Technician Guidance:{" "}
                </span>
                Follow instructions for optimal imaging results.
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="xray-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Normal Activity: 
                </span>
                Resume daily activities immediately after the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Image Review:
                </span>{" "}
                A radiologist analyzes the images and sends a report to your doctor.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Contrast Monitoring:
                </span>{" "}
                If contrast material was used, drink water to flush it out.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Discuss Results:
                </span>{" "}
                Your doctor will explain findings and recommend next steps.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up:
                </span>{" "}
                Additional tests may be needed based on the results.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default XrayExpectation