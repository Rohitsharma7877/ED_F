import React, { useState } from "react";
import "./mritestExpectation.css";

const MRItestExpectation = () => {
  const [activeSection, setActiveSection] = useState("before");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="mri-test-container">
      {/* <TiTick className="tick-icon" /> */}
      <h1>What to Expect Before, During & After a MRI Diagnostic Test</h1>

      {/* Section Navigation */}
      <div className="mri-section-nav">
        <button
          className={`mri-section-button ${
            activeSection === "before" ? "active" : ""
          }`}
          onClick={() => handleClick("before")}
        >
          Before Test
        </button>
        <button
          className={`mri-section-button ${
            activeSection === "during" ? "active" : ""
          }`}
          onClick={() => handleClick("during")}
        >
          During Test
        </button>
        <button
          className={`mri-section-button ${
            activeSection === "after" ? "active" : ""
          }`}
          onClick={() => handleClick("after")}
        >
          After Test
        </button>
      </div>

      {/* Section Content */}
      <div className="mri-test-sections">
        {/* Before the Test */}
        {activeSection === "before" && (
          <div className="mri-test-section">
            <h2>Before the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Consultation:{" "}
                </span>
                Discuss your medical history and medications with your doctor.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Fasting:
                </span>{" "}
                Avoid heavy meals 2-3 hours before the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Comfortable Clothing:{" "}
                </span>
                Wear loose, comfortable clothes and walking shoes.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Avoid Stimulants:{" "}
                </span>
                Refrain from caffeine, alcohol, and smoking before the test.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Inform About Conditions:{" "}
                </span>
                Notify your doctor of any existing heart or respiratory issues.
              </li>
            </ul>
          </div>
        )}

        {/* During the Test */}
        {activeSection === "during" && (
          <div className="mri-test-section">
            <h2>During the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Electrode Placement:{" "}
                </span>
                Electrodes are placed on your chest to monitor heart activity.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Initial Resting Phase:{" "}
                </span>
                Your baseline ECG and blood pressure are recorded.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Exercise Phase:{" "}
                </span>
                Walk or jog on a treadmill with increasing speed and incline.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Monitoring:{" "}
                </span>
                Continuous observation of heart rate, blood pressure, and ECG.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Symptoms Check:{" "}
                </span>
                Notify the technician if you feel dizzy, breathless, or
                experience chest pain.
              </li>
            </ul>
          </div>
        )}

        {/* After the Test */}
        {activeSection === "after" && (
          <div className="mri-test-section">
            <h2>After the Test</h2>
            <ul>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Cooling Down:
                </span>
                Post-exercise monitoring until your vitals return to normal.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Results Analysis:
                </span>{" "}
                Immediate preliminary results shared; detailed report later.
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
                  Follow-Up:
                </span>{" "}
                Discuss test results with your doctor for further evaluation.
              </li>
              <li>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  {" "}
                  Next Steps:
                </span>{" "}
                Based on results, further tests or treatment may be advised.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MRItestExpectation;
