import React, { useState } from 'react'
import './UTSoundExpectation.css'

const UTSoundExpectation = () => {
    const [activeSection, setActiveSection] = useState("before");

    const handleClick = (section) => {
      setActiveSection(section);
    };
  return (
    <div className="uts-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a Ultrasonography Test</h1>

      {/* Section Navigation */}
      <div className="uts-section-nav">
        <button
          className={`uts-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`uts-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`uts-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="uts-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="uts-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Doctor’s Instructions:{" "}
                </span>
                Share your medical history and follow specific preparation guidelines.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Fasting:
                </span>{" "}
                Some scans, like abdominal ultrasounds, may require fasting for a few hours.
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
                  Hydration:{" "}
                </span>
                For pelvic ultrasounds, you may need to drink water to fill your bladder.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  No Radiation Risk:{" "}
                </span>
                Rest assured that the procedure is completely safe and radiation-free.
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="uts-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Positioning:{" "}
                </span>
                Lie on an examination table, adjusting as guided by the technician.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Gel Application:{" "}
                </span>
                A warm gel is applied to the skin to enhance sound wave transmission.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Probe Movement: {" "}
                </span>
                A handheld device (transducer) is moved over the area being examined.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Real-Time Imaging:{" "}
                </span>
                The monitor displays live images during the scan.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                Comfortable Process: {" "}
                </span>
                The procedure is painless and usually takes 15–45 minutes.
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="uts-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                No Recovery Time:
                </span>
                You can resume normal activities immediately after the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Results Review: 
                </span>{" "}
                A radiologist examines the images and provides a detailed report.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Doctor Consultation: 
                </span>{" "}
                Discuss findings and next steps with your doctor.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Follow-Up Scans:
                </span>{" "}
                Additional scans may be required for ongoing monitoring.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Safe Procedure:
                </span>{" "}
                No side effects or aftercare is typically needed.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default UTSoundExpectation