import React, { useState } from 'react'

const MMGPExpectation = () => {
    const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="ctscan-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a MRI-Mammography Test</h1>

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
                Doctor Consultation:{" "}
                </span>
                Discuss your medical history and any allergies to contrast dye.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Fasting and Preparation:
                </span>{" "}
                You may be asked to avoid eating or drinking for 4–6 hours if contrast dye is used.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Remove Metal Objects:{" "}
                </span>
                Jewelry, watches, and metal accessories must be removed.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Clothing: {" "}
                </span>
                Wear loose, comfortable clothes or change into a hospital gown.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Contrast Dye Explanation:{" "}
                </span>
                If required, you'll be informed about the injection and its purpose.
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
                You'll lie face down on a padded table with your breasts positioned in openings.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Scanning Process:{" "}
                </span>
                The table slides into the MRI machine, and images are taken using magnetic waves.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Stay Still:{" "}
                </span>
                You'll need to remain still for clear imaging while the machine produces loud noises.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Contrast Injection:{" "}
                </span>
                If used, the dye will be injected through an IV to enhance imaging.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Monitoring: {" "}
                </span>
                Technicians monitor you throughout the test and communicate via an intercom.              </li>
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
                Post-Test Observation:
                </span>
                If contrast dye was used, you may be observed briefly for any allergic reaction.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Normal Activity:
                </span>{" "}
                You can resume regular activities immediately unless advised otherwise.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Report Preparation:
                </span>{" "}
                The radiologist will analyze the images and prepare a report for your doctor.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up Appointment:
                </span>{" "}
                our doctor will discuss the results and next steps, if necessary.              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  No Side Effects: 
                </span>{" "}
                Most patients experience no side effects, making it a safe procedure.              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MMGPExpectation