import React, { useState } from 'react'
import './CTScanExpectation.css'

const CTScanExpectation = () => {
  const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="ctscan-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a CT Scan Test</h1>

      {/* Section Navigation */}
      <div className="ct-section-nav">
        <button
          className={`ct-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`ct-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`ct-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="ctscan-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="ctscan-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Doctor’s Instructions:{" "}
                </span>
                Discuss your medical history, allergies, and medications.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Fasting:
                </span>{" "}
                Avoid eating or drinking for a few hours if contrast dye is used.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Comfortable Clothing:{" "}
                </span>
                Wear loose clothes or change into a hospital gown.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Remove Accessories: {" "}
                </span>
                Take off metal items like jewelry, glasses, and belts.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Contrast Preparation:{" "}
                </span>
                You may be given a contrast dye orally, through injection, or rectally.
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="ctscan-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Positioning:{" "}
                </span>
                Lie still on a motorized table that moves into the CT scanner.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Scanning Process:{" "}
                </span>
                The machine rotates, taking detailed X-ray images of the body.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Contrast Monitoring:{" "}
                </span>
                If dye is used, you might feel a warm sensation.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Communication::{" "}
                </span>
                A technician communicates and monitors from another room.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Duration{" "}
                </span>
                The scan typically lasts 10-30 minutes.
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="ctscan-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Observation:
                </span>
                You may be monitored briefly if contrast dye was used.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Normal Activity:
                </span>{" "}
                Resume regular activities unless instructed otherwise.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Hydration:
                </span>{" "}
                Drink plenty of water to flush out the contrast dye.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Report Analysis:
                </span>{" "}
                A radiologist reviews the scan and sends the results to your doctor.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up:
                </span>{" "}
                Discuss findings with your doctor for further steps or treatments.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default CTScanExpectation